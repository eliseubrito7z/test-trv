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
exports.RegisterAdminUseCase = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const admin_repository_1 = require("../repositories/admin.repository");
let RegisterAdminUseCase = class RegisterAdminUseCase {
    constructor(repository, jwtService) {
        this.repository = repository;
        this.jwtService = jwtService;
    }
    async execute(data) {
        const existing_user = await this.repository.findByEmail(data.email);
        if (existing_user) {
            throw new common_1.ConflictException("This admin user already exists");
        }
        const hashedPw = (0, bcrypt_1.hashSync)(data.password, 10);
        const user = await this.repository.registerNewAdminUser({
            ...data,
            password: hashedPw
        });
        const token = this.jwtService.sign({
            sub: user.external_id,
            name: user.fullname
        });
        return {
            access_token: token
        };
    }
};
exports.RegisterAdminUseCase = RegisterAdminUseCase;
exports.RegisterAdminUseCase = RegisterAdminUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [admin_repository_1.IAuthAdminRepository,
        jwt_1.JwtService])
], RegisterAdminUseCase);
//# sourceMappingURL=register-admin.repository.js.map