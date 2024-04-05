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
exports.AdminOrderRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma.service");
const service_mapper_1 = require("../mappers/service.mapper");
let AdminOrderRepository = class AdminOrderRepository {
    constructor(prisma, serviceMapper) {
        this.prisma = prisma;
        this.serviceMapper = serviceMapper;
    }
    async findAll(filters) {
        const orders = await this.prisma.order.findMany({
            orderBy: {
                created_at: 'asc'
            },
            where: {
                status: filters.status,
                payment_status: filters.payment_status,
                session_status: filters.session_status,
                user: {
                    external_id: filters.user_id
                }
            }
        });
        return orders;
    }
    async retrieve(order_hashid) {
        const order = await this.prisma.order.findFirst({
            where: {
                external_id: order_hashid
            },
            include: {
                services: {
                    include: {
                        credential: {
                            select: {
                                external_id: true
                            }
                        },
                        user: {
                            select: {
                                external_id: true
                            }
                        }
                    }
                }
            }
        });
        if (!order) {
            throw new common_1.NotFoundException("Order not found");
        }
        let mapped_services = [];
        for (const service of order.services) {
            mapped_services.push(this.serviceMapper.prismaServiceToAdminServiceDTO({
                ...service,
                user: {
                    external_id: service.user.external_id
                },
                credential: service.credential ? { external_id: service.credential.external_id } : null
            }));
        }
        let mapped_order = {
            ...order,
            services: mapped_services
        };
        return mapped_order;
    }
};
exports.AdminOrderRepository = AdminOrderRepository;
exports.AdminOrderRepository = AdminOrderRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        service_mapper_1.AdminServiceMapper])
], AdminOrderRepository);
//# sourceMappingURL=admin-order.repository.js.map