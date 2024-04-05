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
exports.FindOrderAndSendUseCase = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma.service");
const productCredentials_repository_1 = require("../repositories/productCredentials.repository");
let FindOrderAndSendUseCase = class FindOrderAndSendUseCase {
    constructor(prisma, repository) {
        this.prisma = prisma;
        this.repository = repository;
    }
    async execute(order_id) {
        const order = await this.prisma.order.findFirst({
            where: {
                external_id: order_id
            },
            include: {
                user: {
                    select: {
                        email: true,
                        locale: true,
                        fullname: true
                    }
                }
            }
        });
        if (!order) {
            throw new common_1.BadRequestException("Order not found");
        }
        await this.repository.sendToBuyer(order);
    }
};
exports.FindOrderAndSendUseCase = FindOrderAndSendUseCase;
exports.FindOrderAndSendUseCase = FindOrderAndSendUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        productCredentials_repository_1.ProductCredentialsRepository])
], FindOrderAndSendUseCase);
//# sourceMappingURL=findOrderAndSend.js.map