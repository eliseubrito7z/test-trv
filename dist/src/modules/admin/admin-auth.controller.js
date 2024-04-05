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
exports.AdminAuthController = void 0;
const common_1 = require("@nestjs/common");
const sign_in_usecase_1 = require("./useCases/sign-in.usecase");
const register_admin_repository_1 = require("./useCases/register-admin.repository");
const auth_guard_admin_provider_1 = require("../../infra/providers/guards/auth-guard-admin.provider");
let AdminAuthController = class AdminAuthController {
    constructor(signInUseCase, register) {
        this.signInUseCase = signInUseCase;
        this.register = register;
    }
    async adminSignIn(data) {
        const { access_token } = await this.signInUseCase.execute(data);
        return {
            access_token,
        };
    }
    async registerNewAdmin(data) {
        const { access_token } = await this.register.execute(data);
        return {
            access_token,
        };
    }
};
exports.AdminAuthController = AdminAuthController;
__decorate([
    (0, common_1.Post)('/auth'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminAuthController.prototype, "adminSignIn", null);
__decorate([
    (0, common_1.Post)('/register'),
    (0, common_1.UseGuards)(auth_guard_admin_provider_1.AdminAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminAuthController.prototype, "registerNewAdmin", null);
exports.AdminAuthController = AdminAuthController = __decorate([
    (0, common_1.Controller)('/admin'),
    __metadata("design:paramtypes", [sign_in_usecase_1.SignInUseCase,
        register_admin_repository_1.RegisterAdminUseCase])
], AdminAuthController);
//# sourceMappingURL=admin-auth.controller.js.map