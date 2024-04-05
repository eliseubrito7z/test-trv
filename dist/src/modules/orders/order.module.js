"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const common_1 = require("@nestjs/common");
const orders_controller_1 = require("./orders.controller");
const create_order_usecase_1 = require("./useCases/create-order.usecase");
const prisma_service_1 = require("../../infra/database/prisma.service");
const order_repository_1 = require("./repositories/order.repository");
const order_prisma_repository_1 = require("./repositories/prisma/order.prisma.repository");
const order_stripe_repository_1 = require("./repositories/stripe/order.stripe.repository");
const hashid_service_1 = require("../../infra/database/hashid.service");
const nestjs_stripe_1 = require("@golevelup/nestjs-stripe");
const find_order_usecase_1 = require("./useCases/find-order.usecase");
const products_repository_1 = require("../products/repositories/products.repository");
const product_stripe_repository_1 = require("../products/repositories/stripe/product.stripe.repository");
const stripe_product_to_dto_mapper_1 = require("../products/mapper/stripe-product-to-dto.mapper");
const user_repository_1 = require("../auth/repositories/user.repository");
const user_prisma_repository_1 = require("../auth/repositories/prisma/user.prisma.repository");
const services_repository_1 = require("../services/repositories/services.repository");
const services_prisma_repository_1 = require("../services/repositories/services.prisma.repository");
const orderMapper_1 = require("./mapper/orderMapper");
const service_mapper_1 = require("../services/mappers/service.mapper");
let OrdersModule = class OrdersModule {
};
exports.OrdersModule = OrdersModule;
exports.OrdersModule = OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [nestjs_stripe_1.StripeModule.forRoot(nestjs_stripe_1.StripeModule, {
                apiKey: process.env.STRIPE_SECRET_KEY,
            })],
        controllers: [orders_controller_1.OrdersController],
        providers: [create_order_usecase_1.CreateOrderUseCase, orderMapper_1.OrderMapper, service_mapper_1.ServiceMapper, find_order_usecase_1.FindOrderUseCase, prisma_service_1.PrismaService, hashid_service_1.HashId, stripe_product_to_dto_mapper_1.StripeProductoToDtoMapper, {
                provide: order_repository_1.IOrderPrismaRepository,
                useClass: order_prisma_repository_1.OrderPrismaRepository
            }, {
                provide: order_repository_1.IOrderStripeRepository,
                useClass: order_stripe_repository_1.OrderStripeRepository
            }, {
                provide: user_repository_1.IUserRepository,
                useClass: user_prisma_repository_1.UserPrismaRepository
            }, {
                provide: products_repository_1.IProductsRepository,
                useClass: product_stripe_repository_1.ProductStripeRepository
            }, {
                provide: services_repository_1.IServicesRepository,
                useClass: services_prisma_repository_1.ServicesPrismaRepository
            }]
    })
], OrdersModule);
//# sourceMappingURL=order.module.js.map