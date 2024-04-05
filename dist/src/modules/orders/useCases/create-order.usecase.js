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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderUseCase = void 0;
const common_1 = require("@nestjs/common");
const order_repository_1 = require("../repositories/order.repository");
const user_repository_1 = require("../../auth/repositories/user.repository");
const client_1 = require("@prisma/client");
const hashid_service_1 = require("../../../infra/database/hashid.service");
const product_cache_1 = require("../../../utils/CacheKeys/product.cache");
const cache_manager_1 = require("@nestjs/cache-manager");
const orders_cache_1 = require("../../../utils/CacheKeys/orders.cache");
const prisma_service_1 = require("../../../infra/database/prisma.service");
const products_repository_1 = require("../../products/repositories/products.repository");
let CreateOrderUseCase = class CreateOrderUseCase {
    constructor(userPrismaRepository, orderPrismaRepository, orderStripeRepository, hashIds, cacheManager, prisma, productRepository) {
        this.userPrismaRepository = userPrismaRepository;
        this.orderPrismaRepository = orderPrismaRepository;
        this.orderStripeRepository = orderStripeRepository;
        this.hashIds = hashIds;
        this.cacheManager = cacheManager;
        this.prisma = prisma;
        this.productRepository = productRepository;
    }
    async execute(data) {
        const user_email = await this.userPrismaRepository.findEmailByExternalId(data.external_id);
        const { id: user_id } = this.hashIds.decode(data.external_id);
        if (user_email == null) {
            throw new common_1.NotFoundException("User not found");
        }
        const line_items = [];
        const service_items = [];
        const products_cache_keys = new Set();
        const account_products = [];
        const all_products_ids = [];
        for (const product of data.products) {
            const { price_id, ...rest } = product;
            all_products_ids.push(product.product_id);
            products_cache_keys.add((0, product_cache_1.findAllProductsCacheKey)(rest.game, rest.type, data.currency));
            line_items.push({
                price: product.price_id,
                quantity: 1
            });
            if (product.type != client_1.Type.ACCOUNT) {
                service_items.push({
                    ...rest,
                    user_id
                });
            }
            else {
                account_products.push(product.product_id);
            }
        }
        const productCredentialsNotDelivered = await this.prisma.productCredentials.findMany({
            where: {
                AND: [
                    { product_id: { in: account_products } },
                    { delivered: false }
                ]
            },
            select: {
                product_id: true
            }
        });
        const missingIds = account_products.filter((product_id) => productCredentialsNotDelivered.includes({ product_id: product_id }));
        if (missingIds.length > 0) {
            for (const product_id of missingIds) {
                await this.productRepository.disableProduct(product_id);
            }
            throw new common_1.BadRequestException("One of the products witch you have in the cart is unavailable, please, refresh the page");
        }
        const session = await this.orderStripeRepository.create({
            line_items,
            customer_email: user_email,
            currency: data.currency
        });
        await this.orderPrismaRepository.create({
            session_id: session.id,
            session_url: session.url,
            user_id,
            total_products: line_items.length,
            amount_total: session.amount_total,
            currency: data.currency,
            created_at: session.created,
            expires_at: session.expires_at,
            services: service_items
        });
        for (const cacheKey of products_cache_keys) {
            this.cacheManager.del(cacheKey);
        }
        for (const { product_id } of data.products) {
            await this.productRepository.updateProductQuantity(product_id);
        }
        await this.cacheManager.del((0, orders_cache_1.ordersByUserCacheKey)(data.external_id));
        return session.url;
    }
};
exports.CreateOrderUseCase = CreateOrderUseCase;
exports.CreateOrderUseCase = CreateOrderUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [user_repository_1.IUserRepository,
        order_repository_1.IOrderPrismaRepository,
        order_repository_1.IOrderStripeRepository,
        hashid_service_1.HashId,
        cache_manager_1.Cache,
        prisma_service_1.PrismaService,
        products_repository_1.IProductsRepository])
], CreateOrderUseCase);
//# sourceMappingURL=create-order.usecase.js.map