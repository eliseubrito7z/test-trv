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
exports.GoogleController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const googleLogin_usecase_1 = require("./useCases/googleLogin.usecase");
let GoogleController = class GoogleController {
    constructor(googleLoginUseCase) {
        this.googleLoginUseCase = googleLoginUseCase;
    }
    async googleAuth(req) { }
    async googleAuthRedirect(req, res) {
        const { access_token } = await this.googleLoginUseCase.execute(req.user);
        res.cookie('trvstore.token', access_token, {
            path: '/',
            maxAge: 1000 * 60 * 60 * 72,
        });
        res.redirect(process.env.FRONTEND_REDIRECT_URL);
    }
};
exports.GoogleController = GoogleController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GoogleController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Get)('/redirect'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GoogleController.prototype, "googleAuthRedirect", null);
exports.GoogleController = GoogleController = __decorate([
    (0, common_1.Controller)('/auth/google'),
    __metadata("design:paramtypes", [googleLogin_usecase_1.GoogleLoginUseCase])
], GoogleController);
//# sourceMappingURL=auth-google.controller.js.map