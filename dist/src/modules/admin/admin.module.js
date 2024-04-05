"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const admin_repository_1 = require("./repositories/admin.repository");
const prisma_service_1 = require("../../infra/database/prisma.service");
const register_admin_repository_1 = require("./useCases/register-admin.repository");
const sign_in_usecase_1 = require("./useCases/sign-in.usecase");
const admin_auth_repository_1 = require("./repositories/admin-auth.repository");
const admin_auth_controller_1 = require("./admin-auth.controller");
const admin_services_controller_1 = require("./admin-services.controller");
const admin_services_repository_1 = require("./repositories/admin-services.repository");
const service_mapper_1 = require("../services/mappers/service.mapper");
const admin_order_repository_1 = require("./repositories/admin-order.repository");
const admin_orders_controller_1 = require("./admin-orders.controller");
const credential_mapper_1 = require("./mappers/credential.mapper");
const admin_credentials_repository_1 = require("./repositories/admin-credentials.repository");
const admin_credentials_controller_1 = require("./admin-credentials.controller");
const send_credential_usecase_1 = require("./useCases/send-credential.usecase");
const service_mapper_2 = require("./mappers/service.mapper");
const admin_procuts_controller_1 = require("./admin-procuts.controller");
const admin_product_repository_1 = require("./repositories/admin-product.repository");
const nestjs_stripe_1 = require("@golevelup/nestjs-stripe");
const create_product_usecase_1 = require("./useCases/create-product.usecase");
const mail_module_1 = require("../mail/mail.module");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_stripe_1.StripeModule.forRoot(nestjs_stripe_1.StripeModule, {
                apiKey: process.env.STRIPE_SECRET_KEY,
            }),
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.PRIVATE_KEY,
                signOptions: {
                    expiresIn: '6h'
                }
            }),
            mail_module_1.MailModule
        ],
        controllers: [admin_procuts_controller_1.AdminProductsController, admin_credentials_controller_1.AdminCredentialController, admin_auth_controller_1.AdminAuthController, admin_services_controller_1.AdminServicesController, admin_orders_controller_1.AdminOrdersController],
        providers: [create_product_usecase_1.CreateProductUseCase, service_mapper_2.AdminServiceMapper, send_credential_usecase_1.SendCredentialUseCase, credential_mapper_1.AdminCredentialMapper, service_mapper_1.ServiceMapper, prisma_service_1.PrismaService, register_admin_repository_1.RegisterAdminUseCase, sign_in_usecase_1.SignInUseCase, {
                provide: admin_repository_1.IAuthAdminRepository,
                useClass: admin_auth_repository_1.AuthAdminRepository
            }, {
                provide: admin_repository_1.IAdminServicesRepository,
                useClass: admin_services_repository_1.AdminServicesRepository
            }, {
                provide: admin_repository_1.IAdminOrdersRepository,
                useClass: admin_order_repository_1.AdminOrderRepository
            }, {
                provide: admin_repository_1.IAdminCredentialsRepository,
                useClass: admin_credentials_repository_1.AdminCredentialRepository
            }, {
                provide: admin_repository_1.IAdminProductsRepository,
                useClass: admin_product_repository_1.AdminProductRepository
            }]
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map