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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordRecoveryUseCase = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repositories/user.repository");
const jwt_1 = require("@nestjs/jwt");
let PasswordRecoveryUseCase = class PasswordRecoveryUseCase {
    constructor(repository, jwtService) {
        this.repository = repository;
        this.jwtService = jwtService;
    }
    async execute(data) {
        const user = await this.repository.findByEmail(data.email);
        if (!user) {
            throw new common_1.NotFoundException("User not found");
        }
        const token = this.jwtService.sign({
            sub: user.external_id,
            name: user.fullname
        }, {
            expiresIn: '5m'
        });
        return { user_email: user.email, token: token, locale: user.locale };
    }
};
exports.PasswordRecoveryUseCase = PasswordRecoveryUseCase;
exports.PasswordRecoveryUseCase = PasswordRecoveryUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.IUserRepository,
        jwt_1.JwtService])
], PasswordRecoveryUseCase);
//# sourceMappingURL=recovery.usecase.js.map