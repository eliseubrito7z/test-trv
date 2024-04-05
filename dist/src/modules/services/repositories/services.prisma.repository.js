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
exports.ServicesPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma.service");
const service_mapper_1 = require("../mappers/service.mapper");
const client_1 = require("@prisma/client");
let ServicesPrismaRepository = class ServicesPrismaRepository {
    constructor(prisma, mapper) {
        this.prisma = prisma;
        this.mapper = mapper;
    }
    async findNotWaitingServices(order_hashid) {
        const services = await this.prisma.service.findMany({
            where: {
                order: {
                    external_id: order_hashid,
                },
                NOT: {
                    status: client_1.Status.WAITING
                }
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
        let servicesDto = [];
        for (let service of services) {
            servicesDto.push(this.mapper.prismaServiceToDto(service));
        }
        return servicesDto;
    }
    async provideCredential(data) {
        const desired_service = await this.prisma.service.findFirst({
            where: {
                product_id: data.product_id,
                order: {
                    external_id: data.order_hashid
                },
            }
        });
        console.log("DESIRED SERVICE ", desired_service);
        if (!desired_service) {
            throw new common_1.BadRequestException("Service not found");
        }
        if (desired_service.status != client_1.Status.WAITING) {
            console.log("IF DESIRED SERVICE ", desired_service);
            throw new common_1.BadRequestException("This product already have an credential connected to her");
        }
        const updated_service = await this.prisma.service.update({
            where: {
                id: desired_service.id
            },
            data: {
                credential: {
                    connect: {
                        external_id: data.credential_hashid
                    }
                },
                status: client_1.Status.IN_PROGRESS
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
        return this.mapper.prismaServiceToDto(updated_service);
    }
};
exports.ServicesPrismaRepository = ServicesPrismaRepository;
exports.ServicesPrismaRepository = ServicesPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, service_mapper_1.ServiceMapper])
], ServicesPrismaRepository);
//# sourceMappingURL=services.prisma.repository.js.map