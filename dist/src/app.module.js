"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./modules/auth/auth.module");
const core_1 = require("@nestjs/core");
const nestjs_zod_1 = require("nestjs-zod");
const order_module_1 = require("./modules/orders/order.module");
const products_module_1 = require("./modules/products/products.module");
const credentials_module_1 = require("./modules/credentials/credentials.module");
const services_module_1 = require("./modules/services/services.module");
const webhook_module_1 = require("./modules/webhooks/webhook.module");
const admin_module_1 = require("./modules/admin/admin.module");
const auth_google_module_1 = require("./modules/auth-goole/auth-google.module");
const cache_manager_1 = require("@nestjs/cache-manager");
const mail_module_1 = require("./modules/mail/mail.module");
const productCredentials_module_1 = require("./modules/productCredentials/productCredentials.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [cache_manager_1.CacheModule.register({
                isGlobal: true,
                ttl: 1000 * 60 * 60 * 1,
            }),
            auth_google_module_1.GoogleOauthModule,
            auth_module_1.AuthModule,
            order_module_1.OrdersModule,
            products_module_1.ProductsModule,
            credentials_module_1.CredentialsModule,
            services_module_1.ServicesModule,
            webhook_module_1.WebhookModule,
            admin_module_1.AdminModule,
            mail_module_1.MailModule,
            productCredentials_module_1.ProductCredentialsModule
        ],
        controllers: [],
        providers: [{
                provide: core_1.APP_PIPE,
                useClass: nestjs_zod_1.ZodValidationPipe
            }],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map