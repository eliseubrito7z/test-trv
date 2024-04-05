"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookModule = void 0;
const nestjs_stripe_1 = require("@golevelup/nestjs-stripe");
const common_1 = require("@nestjs/common");
const webhook_controller_1 = require("./webhook.controller");
const webhook_repository_1 = require("./repository/webhook.repository");
const webhook_usecase_1 = require("./usecases/webhook.usecase");
const prisma_service_1 = require("../../infra/database/prisma.service");
const stripe_1 = __importDefault(require("stripe"));
const products_repository_1 = require("../products/repositories/products.repository");
const product_stripe_repository_1 = require("../products/repositories/stripe/product.stripe.repository");
const stripe_product_to_dto_mapper_1 = require("../products/mapper/stripe-product-to-dto.mapper");
const mail_module_1 = require("../mail/mail.module");
const productCredentials_repository_1 = require("../productCredentials/repositories/productCredentials.repository");
let WebhookModule = class WebhookModule {
};
exports.WebhookModule = WebhookModule;
exports.WebhookModule = WebhookModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_stripe_1.StripeModule.forRoot(nestjs_stripe_1.StripeModule, {
                apiKey: process.env.STRIPE_SECRET_KEY,
            }), mail_module_1.MailModule
        ],
        controllers: [webhook_controller_1.WebhookController],
        providers: [webhook_repository_1.WebhookRepository, webhook_usecase_1.WebhookUseCase, prisma_service_1.PrismaService, stripe_1.default, {
                provide: products_repository_1.IProductsRepository,
                useClass: product_stripe_repository_1.ProductStripeRepository
            }, stripe_product_to_dto_mapper_1.StripeProductoToDtoMapper, productCredentials_repository_1.ProductCredentialsRepository]
    })
], WebhookModule);
//# sourceMappingURL=webhook.module.js.map