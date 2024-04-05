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
exports.CredentialsPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma.service");
const credential_mapper_1 = require("../mapper/credential.mapper");
const credentialsCrypt_1 = require("../../../utils/credentialsCrypt");
let CredentialsPrismaRepository = class CredentialsPrismaRepository {
    constructor(prisma, mapper) {
        this.prisma = prisma;
        this.mapper = mapper;
    }
    async save(data, user_hashid) {
        const { password: unsafe_pw, ...validData } = data;
        const password = await (0, credentialsCrypt_1.encrypt)(data.password);
        const credential = await this.prisma.credential.create({
            data: {
                ...validData,
                password,
                user_id: undefined,
                user: {
                    connect: {
                        external_id: user_hashid
                    }
                }
            }
        });
        return this.mapper.credentialToDto(credential);
    }
    async findExistingCredential(data, user_hashid) {
        const credential = await this.prisma.credential.findFirst({
            where: {
                user: {
                    external_id: user_hashid
                },
                active: true,
                ...data
            }
        });
        return credential?.external_id ?? null;
    }
    async findUserCredentials(user_hashid) {
        const credentials = await this.prisma.credential.findMany({
            where: {
                user: {
                    external_id: user_hashid
                },
                active: true
            },
            select: {
                external_id: true,
                game: true,
                plataform: true,
                store: true,
                email: true,
                nickname: true,
                observations: true,
                created_at: true
            }
        });
        if (credentials.length == 0)
            null;
        return credentials;
    }
    async disableCredential(user_hashid, credential_hashid) {
        const credential = await this.prisma.credential.findFirstOrThrow({
            where: {
                user: {
                    external_id: user_hashid
                },
                external_id: credential_hashid,
            },
            select: {
                active: true,
                id: true
            }
        });
        if (!credential.active) {
            throw new common_1.ConflictException({ message: "Credential already disabled" });
        }
        await this.prisma.credential.update({
            where: {
                id: credential.id
            },
            data: {
                active: false
            }
        });
    }
    async findCredentialById(credential_hashid, user_id) {
        const credential = await this.prisma.credential.findFirstOrThrow({
            where: {
                external_id: credential_hashid
            }
        });
        if (credential.user_id != user_id) {
            throw new common_1.BadRequestException("The owner of this credenial isn't you.");
        }
        return credential;
    }
};
exports.CredentialsPrismaRepository = CredentialsPrismaRepository;
exports.CredentialsPrismaRepository = CredentialsPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        credential_mapper_1.CredentialMapper])
], CredentialsPrismaRepository);
//# sourceMappingURL=credentials.prisma.repository.js.map