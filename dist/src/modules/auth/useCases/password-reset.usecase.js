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
exports.PasswordResetUseCase = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repositories/user.repository");
const bcrypt_1 = require("bcrypt");
let PasswordResetUseCase = class PasswordResetUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const user_email = await this.repository.findEmailByExternalId(data.user_id);
        if (!user_email) {
            throw new common_1.NotFoundException("User not found");
        }
        const hashedPw = (0, bcrypt_1.hashSync)(data.password, 10);
        await this.repository.updatePassword({
            password: hashedPw,
            email: user_email
        });
    }
};
exports.PasswordResetUseCase = PasswordResetUseCase;
exports.PasswordResetUseCase = PasswordResetUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.IUserRepository])
], PasswordResetUseCase);
//# sourceMappingURL=password-reset.usecase.js.map