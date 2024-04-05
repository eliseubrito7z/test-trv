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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const sign_in_dto_1 = require("./dto/sign-in.dto");
const create_user_schema_1 = require("./schemas/create-user.schema");
const create_user_usecase_1 = require("./useCases/create-user.usecase");
const sign_in_usecase_1 = require("./useCases/sign-in.usecase");
const swagger_1 = require("@nestjs/swagger");
const nestjs_zod_1 = require("nestjs-zod");
const password_recovery_schema_1 = require("./schemas/password-recovery.schema");
const recovery_usecase_1 = require("./useCases/recovery.usecase");
const mail_repository_1 = require("../mail/repositories/mail.repository");
const password_reset_schema_1 = require("./schemas/password-reset.schema");
const password_reset_usecase_1 = require("./useCases/password-reset.usecase");
const auth_guard_providers_1 = require("../../infra/providers/guards/auth-guard.providers");
const emailConfirm_usecase_1 = require("./useCases/emailConfirm.usecase");
class AuthSuccessResponse {
}
let AuthController = class AuthController {
    constructor(signInUseCase, createUserUseCase, recoveryUseCase, passwordResetUseCase, mailRepository, emailConfirmUseCase) {
        this.signInUseCase = signInUseCase;
        this.createUserUseCase = createUserUseCase;
        this.recoveryUseCase = recoveryUseCase;
        this.passwordResetUseCase = passwordResetUseCase;
        this.mailRepository = mailRepository;
        this.emailConfirmUseCase = emailConfirmUseCase;
    }
    async signIn(signInDto) {
        const { access_token } = await this.signInUseCase.execute(signInDto);
        return {
            access_token,
        };
    }
    async signUp(data) {
        const { confirm_password, ...rest } = data;
        await this.createUserUseCase.execute(rest);
    }
    async recovery(data) {
        const { token, locale, user_email } = await this.recoveryUseCase.execute(data);
        this.mailRepository.passwordRecovery({
            locale,
            token,
            email: user_email
        });
    }
    async resetPassword(data, req) {
        const user_id = req.user.sub;
        await this.passwordResetUseCase.execute({
            user_id,
            password: data.password,
        });
    }
    async confimEmail(token) {
        await this.emailConfirmUseCase.execute(token);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/sign-in'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Access code created.', type: AuthSuccessResponse }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized.' }),
    (0, swagger_1.ApiBody)({ type: sign_in_dto_1.CSignInDTO }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('/sign-up'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Created.', type: AuthSuccessResponse }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Validation Failed.', type: nestjs_zod_1.ZodValidationException }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_schema_1.CreateUserSchemaDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/recovery'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [password_recovery_schema_1.PasswordRecoverySchemaDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "recovery", null);
__decorate([
    (0, common_1.Patch)('reset-password'),
    (0, common_1.UseGuards)(auth_guard_providers_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [password_reset_schema_1.PasswordResetSchemaDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Patch)('/verify-email'),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "confimEmail", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [sign_in_usecase_1.SignInUseCase,
        create_user_usecase_1.CreateUserUseCase,
        recovery_usecase_1.PasswordRecoveryUseCase,
        password_reset_usecase_1.PasswordResetUseCase,
        mail_repository_1.IMailRepositoryClient,
        emailConfirm_usecase_1.EmailConfirmUseCase])
], AuthController);
//# sourceMappingURL=auth.controller.js.map