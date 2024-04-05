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
exports.AdminServicesRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma.service");
const service_mapper_1 = require("../../services/mappers/service.mapper");
const client_1 = require("@prisma/client");
let AdminServicesRepository = class AdminServicesRepository {
    constructor(prisma, mapper) {
        this.prisma = prisma;
        this.mapper = mapper;
    }
    async findAll() {
        const prismaServices = await this.prisma.service.findMany({
            orderBy: {
                created_at: 'asc'
            },
            include: {
                order: {
                    select: {
                        external_id: true
                    }
                },
                credential: {
                    select: {
                        external_id: true
                    }
                }
            }
        });
        let services = [];
        for (const service of prismaServices) {
            services.push(this.mapper.prismaServiceToDto(service));
        }
        return services;
    }
    async completeService(service_hashid) {
        const service = await this.prisma.service.update({
            where: {
                external_id: service_hashid
            },
            data: {
                status: client_1.Status.COMPLETED
            },
            include: {
                order: {
                    select: {
                        external_id: true
                    }
                },
                credential: {
                    select: {
                        external_id: true
                    }
                }
            }
        });
        return this.mapper.prismaServiceToDto(service);
    }
};
exports.AdminServicesRepository = AdminServicesRepository;
exports.AdminServicesRepository = AdminServicesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        service_mapper_1.ServiceMapper])
], AdminServicesRepository);
//# sourceMappingURL=admin-services.repository.js.map