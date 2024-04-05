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
exports.AdminCredentialRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma.service");
const credential_mapper_1 = require("../mappers/credential.mapper");
const mail_repository_1 = require("../../mail/repositories/mail.repository");
let AdminCredentialRepository = class AdminCredentialRepository {
    constructor(prisma, mapper, mailRepository) {
        this.prisma = prisma;
        this.mapper = mapper;
        this.mailRepository = mailRepository;
    }
    async sendCredentialToAdmin(data) {
        let credential = await this.prisma.credential.findUnique({
            where: {
                external_id: data.credential_hashid
            },
        });
        if (!credential) {
            throw new common_1.NotFoundException("Credential not found");
        }
        const mapped_credential = this.mapper.prismaCredentialToAccessCredentials(credential);
        const admin = await this.prisma.adminAccess.findFirst({
            where: {
                external_id: data.admin_hashid
            },
            select: {
                email: true
            }
        });
        await this.mailRepository.sendServiceCredentials({
            email: admin.email,
            service_hashid: data.service_hashid,
            account_store: mapped_credential.store,
            account_plataform: mapped_credential.plataform,
            account_email: mapped_credential.email,
            account_nickname: mapped_credential.nickname,
            account_password: mapped_credential.password.toString('utf8')
        });
        return mapped_credential;
    }
};
exports.AdminCredentialRepository = AdminCredentialRepository;
exports.AdminCredentialRepository = AdminCredentialRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        credential_mapper_1.AdminCredentialMapper,
        mail_repository_1.IMailRepositoryAdm])
], AdminCredentialRepository);
//# sourceMappingURL=admin-credentials.repository.js.map