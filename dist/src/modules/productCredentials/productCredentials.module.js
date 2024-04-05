"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCredentialsModule = void 0;
const nestjs_stripe_1 = require("@golevelup/nestjs-stripe");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infra/database/prisma.service");
const productCredentials_repository_1 = require("./repositories/productCredentials.repository");
const productCredentialsController_1 = require("./productCredentialsController");
const mail_module_1 = require("../mail/mail.module");
const findOrderAndSend_1 = require("./usecases/findOrderAndSend");
let ProductCredentialsModule = class ProductCredentialsModule {
};
exports.ProductCredentialsModule = ProductCredentialsModule;
exports.ProductCredentialsModule = ProductCredentialsModule = __decorate([
    (0, common_1.Module)({
        imports: [nestjs_stripe_1.StripeModule.forRoot(nestjs_stripe_1.StripeModule, {
                apiKey: process.env.STRIPE_SECRET_KEY,
            }), mail_module_1.MailModule],
        controllers: [productCredentialsController_1.ProductCredentialsController],
        providers: [
            prisma_service_1.PrismaService,
            productCredentials_repository_1.ProductCredentialsRepository, findOrderAndSend_1.FindOrderAndSendUseCase
        ]
    })
], ProductCredentialsModule);
//# sourceMappingURL=productCredentials.module.js.map