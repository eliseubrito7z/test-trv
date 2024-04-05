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
exports.ServicesController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_providers_1 = require("../../infra/providers/guards/auth-guard.providers");
const services_repository_1 = require("./repositories/services.repository");
const provide_credential_schema_1 = require("./schemas/provide-credential.schema");
const cache_manager_1 = require("@nestjs/cache-manager");
const services_cache_1 = require("../../utils/CacheKeys/services.cache");
let ServicesController = class ServicesController {
    constructor(serviceRepository, cacheManager) {
        this.serviceRepository = serviceRepository;
        this.cacheManager = cacheManager;
    }
    async findNotWaitingServices(order_hashid) {
        const CACHE_KEY = (0, services_cache_1.servicesCacheKey)(order_hashid);
        const cacheData = await this.cacheManager.get(CACHE_KEY);
        if (cacheData) {
            return { services: cacheData };
        }
        const services = await this.serviceRepository.findNotWaitingServices(order_hashid) ?? [];
        await this.cacheManager.set(CACHE_KEY, services, 1000 * 60 * 10);
        return { services };
    }
    async provideCredential(data) {
        const service = await this.serviceRepository.provideCredential(data);
        await this.cacheManager.del((0, services_cache_1.servicesCacheKey)(data.order_hashid));
        return { service };
    }
};
exports.ServicesController = ServicesController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_providers_1.AuthGuard),
    __param(0, (0, common_1.Query)('order_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "findNotWaitingServices", null);
__decorate([
    (0, common_1.Patch)(),
    (0, common_1.UseGuards)(auth_guard_providers_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [provide_credential_schema_1.ProvideCredentialSchemaDTO]),
    __metadata("design:returntype", Promise)
], ServicesController.prototype, "provideCredential", null);
exports.ServicesController = ServicesController = __decorate([
    (0, common_1.Controller)('/services'),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [services_repository_1.IServicesRepository,
        cache_manager_1.Cache])
], ServicesController);
//# sourceMappingURL=services.controller.js.map