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
exports.AdminProductRepository = void 0;
const nestjs_stripe_1 = require("@golevelup/nestjs-stripe");
const common_1 = require("@nestjs/common");
const stripe_1 = __importDefault(require("stripe"));
const prisma_service_1 = require("../../../infra/database/prisma.service");
const credentialsCrypt_1 = require("../../../utils/credentialsCrypt");
let AdminProductRepository = class AdminProductRepository {
    constructor(stripe, prisma) {
        this.stripe = stripe;
        this.prisma = prisma;
    }
    async createProduct(data) {
        const { item_description_en, item_description_br, ...commonMetadata } = data.metadata;
        const product_en = await this.stripe.products.create({
            name: data.name_en,
            description: data.subtitle_en,
            metadata: {
                ...commonMetadata,
                item_description: item_description_en
            }
        });
        const product_br = await this.prisma.productTranslate.create({
            data: {
                subtitle: data.subtitle_br,
                name: data.name_br,
                description: item_description_br,
                game: data.metadata.game,
                type: data.metadata.type,
                plataform: data.metadata.plataform,
                stripe_product: product_en.id,
            }
        });
        return product_en;
    }
    async createPrice(data) {
        await this.stripe.prices.create({
            currency: data.currency,
            product: data.product_id,
            unit_amount: data.unit_amount
        });
    }
    async retrieveProduct(product_id) {
        return await this.stripe.products.retrieve(product_id);
    }
    async createProductCredentials({ password, ...rest }) {
        const hashedPassword = await (0, credentialsCrypt_1.encrypt)(password);
        await this.prisma.productCredentials.create({
            data: {
                ...rest,
                password: hashedPassword,
            }
        });
    }
};
exports.AdminProductRepository = AdminProductRepository;
exports.AdminProductRepository = AdminProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_stripe_1.InjectStripeClient)()),
    __metadata("design:paramtypes", [stripe_1.default,
        prisma_service_1.PrismaService])
], AdminProductRepository);
//# sourceMappingURL=admin-product.repository.js.map