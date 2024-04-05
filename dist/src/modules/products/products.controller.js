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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./repositories/products.repository");
const find_products_usecase_1 = require("./usecases/find-products.usecase");
const auth_guard_providers_1 = require("../../infra/providers/guards/auth-guard.providers");
const cache_manager_1 = require("@nestjs/cache-manager");
const product_cache_1 = require("../../utils/CacheKeys/product.cache");
let ProductsController = class ProductsController {
    constructor(findProductsUseCase, repository, cacheManager) {
        this.findProductsUseCase = findProductsUseCase;
        this.repository = repository;
        this.cacheManager = cacheManager;
    }
    async findAll(game, type, currency) {
        const CACHE_KEY = (0, product_cache_1.findAllProductsCacheKey)(game, type, currency);
        const cacheData = await this.cacheManager.get(CACHE_KEY);
        if (cacheData) {
            return { products: cacheData };
        }
        const products = await this.findProductsUseCase.findAll({ game, type, currency }) ?? [];
        if (!cacheData) {
            await this.cacheManager.set(CACHE_KEY, products, 1000 * 60 * 5);
        }
        else {
            await this.cacheManager.set(CACHE_KEY, products);
        }
        return {
            products: products
        };
    }
    async findOrderProducts(order_hashid) {
        const CACHE_KEY = (0, product_cache_1.retrieveProductCacheKey)(order_hashid);
        const cacheData = await this.cacheManager.get(CACHE_KEY);
        if (cacheData) {
            return { products: cacheData };
        }
        const products = await this.findProductsUseCase.findOrderProducts(order_hashid);
        await this.cacheManager.set(CACHE_KEY, products);
        return { products };
    }
    async getAccountCredentials(product_id) {
        const credentials = await this.repository.getAccountCredentials(product_id);
        return { credentials };
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('game')),
    __param(1, (0, common_1.Query)('type')),
    __param(2, (0, common_1.Query)('currency')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/order'),
    (0, common_1.UseGuards)(auth_guard_providers_1.AuthGuard),
    __param(0, (0, common_1.Query)('order_hashid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findOrderProducts", null);
__decorate([
    (0, common_1.Get)('/order/credentials'),
    (0, common_1.UseGuards)(auth_guard_providers_1.AuthGuard),
    __param(0, (0, common_1.Query)('product_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getAccountCredentials", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('/products'),
    __param(2, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [find_products_usecase_1.FindProductsUseCase,
        products_repository_1.IProductsRepository,
        cache_manager_1.Cache])
], ProductsController);
//# sourceMappingURL=products.controller.js.map