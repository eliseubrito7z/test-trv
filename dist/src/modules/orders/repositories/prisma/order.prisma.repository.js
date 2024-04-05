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
exports.OrderPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../../infra/database/prisma.service");
const orderMapper_1 = require("../../mapper/orderMapper");
let OrderPrismaRepository = class OrderPrismaRepository {
    constructor(prisma, mapper) {
        this.prisma = prisma;
        this.mapper = mapper;
    }
    async create(data) {
        const { services, ...validData } = data;
        const order = await this.prisma.order.create({
            data: {
                ...validData,
                services: {
                    createMany: {
                        data: services,
                    }
                }
            },
        });
        return this.mapper.orderToOrderDTO(order);
    }
    async findByHashId(order_hashid, user_id) {
        const order = await this.prisma.order.findFirstOrThrow({
            where: {
                external_id: order_hashid
            },
        });
        if (order.user_id != user_id) {
            throw new common_1.BadRequestException("The owner of this order isn't you.");
        }
        return order;
    }
    async findByUser(user_hashid) {
        const orders = await this.prisma.order.findMany({
            where: {
                user: {
                    external_id: user_hashid
                },
            },
            include: {
                services: true
            }
        });
        return orders;
    }
};
exports.OrderPrismaRepository = OrderPrismaRepository;
exports.OrderPrismaRepository = OrderPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        orderMapper_1.OrderMapper])
], OrderPrismaRepository);
//# sourceMappingURL=order.prisma.repository.js.map