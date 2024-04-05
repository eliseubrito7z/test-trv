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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookRepository = void 0;
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../../infra/database/prisma.service");
const mail_repository_1 = require("../../mail/repositories/mail.repository");
const productCredentials_repository_1 = require("../../productCredentials/repositories/productCredentials.repository");
const products_repository_1 = require("../../products/repositories/products.repository");
const orders_cache_1 = require("../../../utils/CacheKeys/orders.cache");
const services_cache_1 = require("../../../utils/CacheKeys/services.cache");
let WebhookRepository = class WebhookRepository {
    constructor(prisma, productRepository, cacheManager, mailRepository, productCredentialsRepository) {
        this.prisma = prisma;
        this.productRepository = productRepository;
        this.cacheManager = cacheManager;
        this.mailRepository = mailRepository;
        this.productCredentialsRepository = productCredentialsRepository;
    }
    async checkout(session_id, session_status) {
        const where = { session_id };
        const data = {
            session_status,
            session_url: null
        };
        const sessionIsExpired = session_status == client_1.SessionStatus.EXPIRED;
        if (sessionIsExpired) {
            data['status'] = client_1.OrderStatus.EXPIRED;
            await this.productRepository.returnProductsToStock(session_id);
            console.log("ITEMS RETURNED TO STOCK session_id: ", session_id);
        }
        const order_updated = await this.prisma.order.update({
            where, data,
            select: {
                id: true,
                external_id: true,
                user: {
                    select: {
                        external_id: true
                    }
                }
            }
        });
        if (sessionIsExpired) {
            await this.prisma.service.deleteMany({
                where: {
                    order_id: order_updated.id
                }
            });
        }
        const ORDERS_CACHE_KEY = (0, orders_cache_1.ordersByUserCacheKey)(order_updated.user.external_id);
        const SERVICES_CACHE_KEY = (0, services_cache_1.servicesCacheKey)(order_updated.external_id);
        await this.cacheManager.del(ORDERS_CACHE_KEY);
        await this.cacheManager.del(SERVICES_CACHE_KEY);
    }
    async payment_intent(session_id, payment_status) {
        const where = { session_id };
        const data = {
            payment_status,
        };
        switch (payment_status) {
            case client_1.PaymentStatus.CANCELED:
                data['status'] = client_1.OrderStatus.CANCELED_PAYMENT;
            case client_1.PaymentStatus.PROCESSING:
                data['status'] = client_1.OrderStatus.PROCESSING_PAYMENT;
            case client_1.PaymentStatus.REQUIRE_ACTION:
                data['status'] = client_1.OrderStatus.PAYMENT_WAITING_USER_ACTION;
            case client_1.PaymentStatus.SUCCEEDED:
        }
        const order_updated = await this.prisma.order.update({
            where, data,
            include: {
                user: {
                    select: {
                        email: true,
                        external_id: true,
                        locale: true,
                        fullname: true
                    }
                }
            }
        });
        const ORDERS_CACHE_KEY = (0, orders_cache_1.ordersByUserCacheKey)(order_updated.user.external_id);
        const SERVICES_CACHE_KEY = (0, services_cache_1.servicesCacheKey)(order_updated.external_id);
        await this.cacheManager.del(ORDERS_CACHE_KEY);
        await this.cacheManager.del(SERVICES_CACHE_KEY);
        switch (payment_status) {
            case client_1.PaymentStatus.REQUIRE_ACTION:
                this.mailRepository.paymentPendingUserAction({
                    email: order_updated.user.email,
                    locale: order_updated.user.locale ?? 'EN',
                    order_hashid: order_updated.external_id
                });
                break;
            case client_1.PaymentStatus.SUCCEEDED:
                this.mailRepository.paymentCompleted({
                    email: order_updated.user.email,
                    locale: order_updated.user.locale ?? 'EN',
                    order_hashid: order_updated.external_id
                });
                await this.productCredentialsRepository.sendToBuyer(order_updated);
                break;
        }
    }
};
exports.WebhookRepository = WebhookRepository;
exports.WebhookRepository = WebhookRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        products_repository_1.IProductsRepository,
        cache_manager_1.Cache,
        mail_repository_1.IMailRepositoryClient,
        productCredentials_repository_1.ProductCredentialsRepository])
], WebhookRepository);
//# sourceMappingURL=webhook.repository.js.map