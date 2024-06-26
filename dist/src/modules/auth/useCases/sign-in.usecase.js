"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInUseCase = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const user_repository_1 = require("../repositories/user.repository");
const mail_repository_1 = require("../../mail/repositories/mail.repository");
let SignInUseCase = class SignInUseCase {
    constructor(jwtService, userRepository, mailRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
        this.mailRepository = mailRepository;
    }
    async execute(data) {
        const user = await this.userRepository.findByEmail(data.email);
        if (!user) {
            throw new common_1.UnauthorizedException('Email or password is wrong');
        }
        const correctPassword = await bcrypt.compare(data.password, user.password);
        if (!correctPassword) {
            throw new common_1.UnauthorizedException('Email or password is wrong');
        }
        if (!user.email_confirmed) {
            const token = this.jwtService.sign({
                sub: user.external_id,
                name: user.fullname
            });
            this.mailRepository.emailVerification({
                email: user.email,
                token,
                locale: 'EN',
            });
            return {
                access_token: null
            };
        }
        const token = this.jwtService.sign({
            sub: user.external_id,
            name: user.fullname
        });
        return {
            access_token: token
        };
    }
};
exports.SignInUseCase = SignInUseCase;
exports.SignInUseCase = SignInUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_repository_1.IUserRepository,
        mail_repository_1.IMailRepositoryClient])
], SignInUseCase);
//# sourceMappingURL=sign-in.usecase.js.map