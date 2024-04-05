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
exports.AuthAdminRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma.service");
let AuthAdminRepository = class AuthAdminRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByEmail(email) {
        const admin = await this.prisma.adminAccess.findFirst({
            where: {
                email,
            }
        });
        if (admin) {
            const { id, ...rest } = admin;
            return rest;
        }
        return null;
    }
    async findByExternalId(external_id) {
        const admin = await this.prisma.adminAccess.findFirst({
            where: {
                external_id
            }
        });
        if (admin) {
            const { id, ...rest } = admin;
            return rest;
        }
        return null;
    }
    async registerNewAdminUser(data) {
        const { id, ...admin } = await this.prisma.adminAccess.create({
            data
        });
        return admin;
    }
};
exports.AuthAdminRepository = AuthAdminRepository;
exports.AuthAdminRepository = AuthAdminRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthAdminRepository);
//# sourceMappingURL=admin-auth.repository.js.map