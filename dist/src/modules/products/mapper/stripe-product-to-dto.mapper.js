"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeProductoToDtoMapper = void 0;
const common_1 = require("@nestjs/common");
let StripeProductoToDtoMapper = class StripeProductoToDtoMapper {
    fromStripeToProductDto(product, price) {
        const { game, type, plataform, item_description } = product.metadata;
        const subtitle = product.description;
        const description = item_description.split(";");
        const title = product.name;
        return {
            id: product.id,
            title,
            subtitle,
            description,
            image_url: product.images[0],
            price: {
                price_id: price.id,
                amount: price.unit_amount,
                currency: price.currency
            },
            game: game.toUpperCase(),
            type,
            plataform: plataform.toUpperCase(),
        };
    }
    fromDBtoProductDto(product, price) {
        const { game, type, plataform, subtitle, description, stripe_product, name, imageUrl } = product;
        return {
            id: stripe_product,
            title: name,
            subtitle,
            description: description.split(';'),
            image_url: imageUrl,
            price: {
                price_id: price.id,
                amount: price.unit_amount,
                currency: price.currency
            },
            game,
            type,
            plataform
        };
    }
    fromStripeToPurchasedProductDto(line_item) {
        const product = line_item.price.product;
        const price = line_item.price;
        const isUsd = price.currency == 'usd';
        const { game, type, plataform, item_description_br, item_description_en } = product.metadata;
        const subtitles = product.description.split('%%');
        const subtitle = isUsd ? subtitles[0] : subtitles[1];
        const description = (isUsd ? item_description_en : item_description_br).split(";");
        const titles = product.name.split("%%");
        const title = isUsd ? titles[0] : titles[1];
        return {
            id: product.id,
            title,
            subtitle,
            description,
            image_url: product.images[0],
            price: {
                price_id: price.id,
                amount: price.unit_amount,
                currency: price.currency
            },
            game: game.toUpperCase(),
            type,
            plataform: plataform.toUpperCase(),
        };
    }
};
exports.StripeProductoToDtoMapper = StripeProductoToDtoMapper;
exports.StripeProductoToDtoMapper = StripeProductoToDtoMapper = __decorate([
    (0, common_1.Injectable)()
], StripeProductoToDtoMapper);
//# sourceMappingURL=stripe-product-to-dto.mapper.js.map