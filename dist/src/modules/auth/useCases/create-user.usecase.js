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
exports.CreateUserUseCase = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const user_repository_1 = require("../repositories/user.repository");
const jwt_1 = require("@nestjs/jwt");
const mail_repository_1 = require("../../mail/repositories/mail.repository");
let CreateUserUseCase = class CreateUserUseCase {
    constructor(userRepository, jwtService, mailRepository) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.mailRepository = mailRepository;
    }
    async execute(data) {
        const existing_user = await this.userRepository.findByEmail(data.email);
        if (existing_user && !existing_user.email_confirmed) {
            const token = this.jwtService.sign({
                sub: existing_user.external_id,
                name: existing_user.fullname
            });
            this.mailRepository.emailVerification({
                email: existing_user.email,
                token,
                locale: 'EN',
            });
            return;
        }
        if (existing_user) {
            throw new common_1.ConflictException("This user already exists");
        }
        const hashedPw = (0, bcrypt_1.hashSync)(data.password, 10);
        const user = await this.userRepository.save({
            ...data,
            password: hashedPw
        });
        const token = this.jwtService.sign({
            sub: user.external_id,
            name: user.fullname,
        }, {
            expiresIn: "5m"
        });
        this.mailRepository.emailVerification({
            email: user.email,
            token,
            locale: user.locale ?? "EN",
        });
    }
};
exports.CreateUserUseCase = CreateUserUseCase;
exports.CreateUserUseCase = CreateUserUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.IUserRepository,
        jwt_1.JwtService,
        mail_repository_1.IMailRepositoryClient])
], CreateUserUseCase);
//# sourceMappingURL=create-user.usecase.js.map