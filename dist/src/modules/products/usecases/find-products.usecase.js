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
exports.FindProductsUseCase = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("../repositories/products.repository");
let FindProductsUseCase = class FindProductsUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async findAll(filters) {
        return await this.productRepository.findAllProducts(filters);
    }
    async retrieveProduct(product_id) {
        return await this.productRepository.retrieveProduct(product_id);
    }
    async findOrderProducts(order_hashid) {
        return await this.productRepository.findOrderProducts(order_hashid);
    }
};
exports.FindProductsUseCase = FindProductsUseCase;
exports.FindProductsUseCase = FindProductsUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.IProductsRepository])
], FindProductsUseCase);
//# sourceMappingURL=find-products.usecase.js.map