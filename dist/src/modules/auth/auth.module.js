"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const prisma_service_1 = require("../../infra/database/prisma.service");
const sign_in_usecase_1 = require("./useCases/sign-in.usecase");
const jwt_1 = require("@nestjs/jwt");
const hashid_service_1 = require("../../infra/database/hashid.service");
const user_repository_1 = require("./repositories/user.repository");
const user_prisma_repository_1 = require("./repositories/prisma/user.prisma.repository");
const create_user_usecase_1 = require("./useCases/create-user.usecase");
const recovery_usecase_1 = require("./useCases/recovery.usecase");
const password_reset_usecase_1 = require("./useCases/password-reset.usecase");
const mail_repository_1 = require("../mail/repositories/mail.repository");
const mail_client_repository_1 = require("../mail/repositories/mail-client.repository");
const emailConfirm_usecase_1 = require("./useCases/emailConfirm.usecase");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.PRIVATE_KEY,
                signOptions: {
                    expiresIn: '72h'
                }
            })
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [emailConfirm_usecase_1.EmailConfirmUseCase, recovery_usecase_1.PasswordRecoveryUseCase, password_reset_usecase_1.PasswordResetUseCase, prisma_service_1.PrismaService, sign_in_usecase_1.SignInUseCase, create_user_usecase_1.CreateUserUseCase, hashid_service_1.HashId, {
                provide: user_repository_1.IUserRepository,
                useClass: user_prisma_repository_1.UserPrismaRepository
            }, {
                provide: mail_repository_1.IMailRepositoryClient,
                useClass: mail_client_repository_1.MailClientRepository
            }]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map