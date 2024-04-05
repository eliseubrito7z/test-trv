"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialsModule = void 0;
const nestjs_stripe_1 = require("@golevelup/nestjs-stripe");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infra/database/prisma.service");
const credentials_repository_1 = require("./repositories/credentials.repository");
const credentials_prisma_repository_1 = require("./repositories/credentials.prisma.repository");
const credentials_controller_1 = require("./credentials.controller");
const hashid_service_1 = require("../../infra/database/hashid.service");
const create_credential_usecase_1 = require("./usecases/create-credential.usecase");
const credential_mapper_1 = require("./mapper/credential.mapper");
let CredentialsModule = class CredentialsModule {
};
exports.CredentialsModule = CredentialsModule;
exports.CredentialsModule = CredentialsModule = __decorate([
    (0, common_1.Module)({
        imports: [nestjs_stripe_1.StripeModule.forRoot(nestjs_stripe_1.StripeModule, {
                apiKey: process.env.STRIPE_SECRET_KEY,
            })],
        controllers: [credentials_controller_1.CredentialsController],
        providers: [credential_mapper_1.CredentialMapper, prisma_service_1.PrismaService, hashid_service_1.HashId, create_credential_usecase_1.CreateCredentialUseCase, {
                provide: credentials_repository_1.ICredentialsRepository,
                useClass: credentials_prisma_repository_1.CredentialsPrismaRepository
            }]
    })
], CredentialsModule);
//# sourceMappingURL=credentials.module.js.map