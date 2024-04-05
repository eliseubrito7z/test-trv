"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStripeRepository = void 0;
const stripe_1 = __importDefault(require("stripe"));
const common_1 = require("@nestjs/common");
const nestjs_stripe_1 = require("@golevelup/nestjs-stripe");
const stripe_product_to_dto_mapper_1 = require("../../mapper/stripe-product-to-dto.mapper");
const prisma_service_1 = require("../../../../infra/database/prisma.service");
const client_1 = require("@prisma/client");
const array_chunk_1 = __importDefault(require("../../../../utils/array_chunk"));
const cache_manager_1 = require("@nestjs/cache-manager");
const product_cache_1 = require("../../../../utils/CacheKeys/product.cache");
let ProductStripeRepository = class ProductStripeRepository {
    constructor(stripe, mapper, prisma, cacheManager) {
        this.stripe = stripe;
        this.mapper = mapper;
        this.prisma = prisma;
        this.cacheManager = cacheManager;
    }
    async findAllProducts({ game, type, currency }) {
        const productsFromStripe = await this.stripe.products.search({
            expand: ['data.prices'],
            query: `active:\'true\' and metadata['game']:\'${game}\' and metadata['type']:\'${type}\'`,
            limit: 100
        });
        if (productsFromStripe.data.length == 0) {
            return null;
        }
        const products_ids_chunks = (0, array_chunk_1.default)(productsFromStripe.data.map(prod => prod.id), 10);
        const prices = await this.findPrices(products_ids_chunks, currency);
        if (!prices) {
            return null;
        }
        const productsTypped = [];
        if (currency == 'brl') {
            let i = 0;
            const products_ids_array = [];
            for (i; i < products_ids_chunks.length; i++) {
                const currArr = products_ids_chunks[i];
                for (let j = 0; j < currArr.length; j++) {
                    products_ids_array.push(currArr[j]);
                }
            }
            const productImages = {};
            for (i = 0; i < productsFromStripe.data.length; i++) {
                const currProduct = productsFromStripe.data[i];
                productImages[currProduct.id] = currProduct.images[0];
            }
            const productsFromDb = await this.findProductTranslate(products_ids_array);
            if (!productsFromDb)
                return null;
            for (const product of productsFromDb) {
                const price = prices[product.stripe_product];
                productsTypped.push(this.mapper.fromDBtoProductDto({
                    ...product,
                    imageUrl: productImages[product.stripe_product]
                }, price));
            }
        }
        else {
            for (const product of productsFromStripe.data) {
                const price = prices[product.id];
                productsTypped.push(this.mapper.fromStripeToProductDto(product, price));
            }
        }
        return productsTypped;
    }
    async findProductTranslate(products_ids) {
        const productsFromDb = await this.prisma.productTranslate.findMany({
            where: {
                stripe_product: { in: products_ids }
            },
            select: {
                id: true,
                plataform: true,
                stripe_product: true,
                game: true,
                name: true,
                type: true,
                subtitle: true,
                description: true,
            }
        });
        return productsFromDb;
    }
    async findPrices(products_ids_chunks, currency) {
        let prices_by_product = [];
        for (const products_ids of products_ids_chunks) {
            await this.stripe.prices.search({
                query: `product:\'${products_ids[0]}\'`
                    .concat(...products_ids.slice(1).map(id => (` OR product:\'${id}\'`))),
                limit: 100
            })
                .then((prices) => {
                prices
                    .data
                    .filter((price) => price.currency.toUpperCase() == currency.toUpperCase())
                    .forEach((price) => {
                    prices_by_product[price.product] = price;
                });
            });
        }
        if (Object.keys(prices_by_product).length == 0) {
            return null;
        }
        return prices_by_product;
    }
    async retrieveProduct(product_id) {
        const price = await this.stripe.prices.search({
            query: `product:\'${product_id}\'`
        });
        const product = await this.stripe.products.retrieve(product_id);
        return this.mapper.fromStripeToProductDto(product, price.data[0]);
    }
    async findOrderProducts(order_hashid) {
        const session_id = await this.prisma.order.findFirst({
            where: {
                external_id: order_hashid
            },
            select: {
                session_id: true
            }
        })
            .then((order) => {
            if (!order?.session_id) {
                throw new common_1.NotFoundException('Order not found');
            }
            return order.session_id;
        });
        const line_items = await this.stripe.checkout.sessions.listLineItems(session_id, {
            expand: ['data.price.product']
        });
        const currency = line_items.data[0].currency;
        const productsTypped = [];
        const prices = {};
        if (currency == 'brl') {
            let i;
            const products_ids = [];
            const productImages = {};
            for (i = 0; i < line_items.data.length; i++) {
                const currProduct = line_items.data[i].price.product;
                productImages[currProduct.id] = currProduct.images[0];
                prices[currProduct.id] = line_items.data[i].price;
                products_ids.push(currProduct.id);
            }
            const productsFromDb = await this.findProductTranslate(products_ids);
            if (!productsFromDb)
                return null;
            for (const product of productsFromDb) {
                const price = prices[product.stripe_product];
                productsTypped.push(this.mapper.fromDBtoProductDto({
                    ...product,
                    imageUrl: productImages[product.stripe_product]
                }, price));
            }
        }
        else {
            for (const line_item of line_items.data) {
                productsTypped.push(this.mapper.fromStripeToPurchasedProductDto(line_item));
            }
        }
        return productsTypped;
    }
    async getAccountCredentials(product_id) {
        const product = await this.stripe.products.retrieve(product_id);
        const { type, email, password } = product.metadata;
        if (type != client_1.Type.ACCOUNT) {
            throw new common_1.BadRequestException("This product isn't an account.");
        }
        if (!email || !password) {
            throw new common_1.InternalServerErrorException("Credential imcomplete, contact the support.");
        }
        return {
            email,
            password
        };
    }
    async updateProductQuantity(product_id) {
        const product = await this.stripe.products.retrieve(product_id);
        const { quantity } = product.metadata;
        const newQuantity = parseInt(quantity) - 1;
        const active = newQuantity > 0;
        if (active) {
            await this.stripe.products.update(product_id, {
                metadata: {
                    quantity: newQuantity,
                },
            });
        }
        else {
            this.disableProduct(product_id);
        }
    }
    async disableProduct(product_id) {
        const product = await this.stripe.products.update(product_id, {
            active: false,
            metadata: {
                quantity: 0
            }
        });
        const { game, type } = product.metadata;
        const cacheKeys = (0, product_cache_1.productCacheOfBothCurrencies)(game, type);
        for (const cacheKey of cacheKeys) {
            await this.cacheManager.del(cacheKey);
        }
    }
    async returnProductsToStock(session_id) {
        const { data: line_items } = await this.stripe.checkout.sessions.listLineItems(session_id);
        const products_ids = line_items.map((item) => item.price.product);
        const query = `product:\'${products_ids[0]}\'`.concat(...products_ids.slice(1).map(id => (` OR product:\'${id}\'`)));
        const { data: products } = await this.stripe.products.search({
            query,
            limit: 100
        });
        for (const product of products) {
            const { quantity } = product.metadata;
            const newQuantity = parseInt(quantity) + 1;
            await this.stripe.products.update(product.id, {
                active: true,
                metadata: { quantity: newQuantity }
            });
        }
    }
    async checkIfTheProductsIsAvailable(products_ids) {
        const query = `product:\'${products_ids[0]}\'`.concat(...products_ids.slice(1).map(id => (` OR product:\'${id}\'`)));
        const { data: products } = await this.stripe.products.search({
            query,
            limit: 100,
        });
        const unavailableProductsIds = [];
        for (const product of products) {
            if (parseInt(product.metadata.quantity) < 1 || !product.active) {
                unavailableProductsIds.push(product.id);
            }
        }
        if (unavailableProductsIds.length > 0) {
            for (const product_id of unavailableProductsIds) {
                await this.disableProduct(product_id);
            }
            throw new common_1.BadRequestException("One of the products witch you have in the cart is unavailable, please, refresh the page");
        }
    }
};
exports.ProductStripeRepository = ProductStripeRepository;
exports.ProductStripeRepository = ProductStripeRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_stripe_1.InjectStripeClient)()),
    __param(3, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [stripe_1.default,
        stripe_product_to_dto_mapper_1.StripeProductoToDtoMapper,
        prisma_service_1.PrismaService,
        cache_manager_1.Cache])
], ProductStripeRepository);
//# sourceMappingURL=product.stripe.repository.js.map