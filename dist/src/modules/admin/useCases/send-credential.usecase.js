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
exports.SendCredentialUseCase = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
const admin_repository_1 = require("../repositories/admin.repository");
let SendCredentialUseCase = class SendCredentialUseCase {
    constructor(prisma, credentialRepository) {
        this.prisma = prisma;
        this.credentialRepository = credentialRepository;
    }
    async execute(data) {
        const admin = await this.prisma.adminAccess.findFirst({
            where: {
                external_id: data.admin_hashid
            },
            select: {
                password: true,
                email: true
            }
        });
        if (!admin) {
            throw new common_1.BadRequestException('Incorrect admin credentials.');
        }
        const correctPassword = await bcrypt.compare(data.password, admin.password);
        if (!correctPassword) {
            throw new common_1.UnauthorizedException("Incorrect password.");
        }
        this.credentialRepository.sendCredentialToAdmin(data);
    }
};
exports.SendCredentialUseCase = SendCredentialUseCase;
exports.SendCredentialUseCase = SendCredentialUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        admin_repository_1.IAdminCredentialsRepository])
], SendCredentialUseCase);
//# sourceMappingURL=send-credential.usecase.js.map