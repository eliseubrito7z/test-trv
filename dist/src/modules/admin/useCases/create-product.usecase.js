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
exports.CreateProductUseCase = void 0;
const common_1 = require("@nestjs/common");
const admin_repository_1 = require("../repositories/admin.repository");
const client_1 = require("@prisma/client");
let CreateProductUseCase = class CreateProductUseCase {
    constructor(adminProductRepository) {
        this.adminProductRepository = adminProductRepository;
    }
    async execute(data) {
        const { title_br, title_en, subtitle_br, subtitle_en, price_br, price_en, account, ...metadata } = data;
        if (metadata.type == client_1.Type.ACCOUNT) {
            if (!account) {
                throw new common_1.BadRequestException("Products with type [ACCOUNT] must have the account credentials.");
            }
        }
        const product = await this.adminProductRepository.createProduct({
            name_br: title_br,
            name_en: title_en,
            subtitle_br, subtitle_en,
            account: account ? {
                ...account,
                plataform: metadata.plataform
            } : null,
            metadata
        });
        await this.adminProductRepository.createPrice({
            currency: 'usd',
            product_id: product.id,
            unit_amount: price_en * 100
        });
        await this.adminProductRepository.createPrice({
            currency: 'brl',
            product_id: product.id,
            unit_amount: price_br * 100
        });
        if (metadata.type == client_1.Type.ACCOUNT) {
            await this.adminProductRepository.createProductCredentials({
                product_id: product.id,
                password: account.password,
                email: account.email,
                nickname: account.nickname,
                plataform: metadata.plataform,
                store: account.store
            });
        }
        return await this.adminProductRepository.retrieveProduct(product.id);
    }
};
exports.CreateProductUseCase = CreateProductUseCase;
exports.CreateProductUseCase = CreateProductUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [admin_repository_1.IAdminProductsRepository])
], CreateProductUseCase);
//# sourceMappingURL=create-product.usecase.js.map