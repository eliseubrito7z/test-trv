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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_providers_1 = require("../../infra/providers/guards/auth-guard.providers");
const create_order_schema_1 = require("./schemas/create-order.schema");
const create_order_usecase_1 = require("./useCases/create-order.usecase");
const find_order_usecase_1 = require("./useCases/find-order.usecase");
const hashid_service_1 = require("../../infra/database/hashid.service");
const cache_manager_1 = require("@nestjs/cache-manager");
const orders_cache_1 = require("../../utils/CacheKeys/orders.cache");
let OrdersController = class OrdersController {
    constructor(createOrderUseCase, findOrderUseCase, hashid, cacheManager) {
        this.createOrderUseCase = createOrderUseCase;
        this.findOrderUseCase = findOrderUseCase;
        this.hashid = hashid;
        this.cacheManager = cacheManager;
    }
    async create(data, req) {
        const external_id = req.user.sub;
        const session_url = await this.createOrderUseCase.execute({
            ...data,
            external_id,
        });
        return { url: session_url };
    }
    async findAll(req) {
        const user_hashid = req.user.sub;
        const CACHE_KEY = (0, orders_cache_1.ordersByUserCacheKey)(user_hashid);
        const cacheData = await this.cacheManager.get(CACHE_KEY);
        if (cacheData) {
            return { orders: cacheData };
        }
        const orders = await this.findOrderUseCase.findByUser(user_hashid) ?? [];
        await this.cacheManager.set(CACHE_KEY, orders, 1000 * 60 * 10);
        return { orders };
    }
    async findByHashId(order_hashid, req) {
        const user_hashid = req.user.sub;
        const { id: user_id } = this.hashid.decode(user_hashid);
        const order = await this.findOrderUseCase.findByHashId(order_hashid, user_id);
        return { order };
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_providers_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_schema_1.CreateOrderSchemaDTO, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_providers_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/retrieve'),
    (0, common_1.UseGuards)(auth_guard_providers_1.AuthGuard),
    __param(0, (0, common_1.Query)('order_id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "findByHashId", null);
exports.OrdersController = OrdersController = __decorate([
    (0, common_1.Controller)('/orders'),
    __param(3, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [create_order_usecase_1.CreateOrderUseCase,
        find_order_usecase_1.FindOrderUseCase,
        hashid_service_1.HashId,
        cache_manager_1.Cache])
], OrdersController);
//# sourceMappingURL=orders.controller.js.map