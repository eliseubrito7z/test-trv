"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./repositories/products.repository");
const product_stripe_repository_1 = require("./repositories/stripe/product.stripe.repository");
const nestjs_stripe_1 = require("@golevelup/nestjs-stripe");
const find_products_usecase_1 = require("./usecases/find-products.usecase");
const products_controller_1 = require("./products.controller");
const stripe_product_to_dto_mapper_1 = require("./mapper/stripe-product-to-dto.mapper");
const prisma_service_1 = require("../../infra/database/prisma.service");
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [nestjs_stripe_1.StripeModule.forRoot(nestjs_stripe_1.StripeModule, {
                apiKey: process.env.STRIPE_SECRET_KEY,
            })],
        controllers: [products_controller_1.ProductsController],
        providers: [prisma_service_1.PrismaService, find_products_usecase_1.FindProductsUseCase, stripe_product_to_dto_mapper_1.StripeProductoToDtoMapper, {
                provide: products_repository_1.IProductsRepository,
                useClass: product_stripe_repository_1.ProductStripeRepository
            }]
    })
], ProductsModule);
//# sourceMappingURL=products.module.js.map