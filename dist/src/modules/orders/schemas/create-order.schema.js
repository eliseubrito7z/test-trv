"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderSchemaDTO = void 0;
const client_1 = require("@prisma/client");
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const ProductSchema = z_1.z.object({
    plataform: z_1.z.nativeEnum(client_1.Plataform),
    type: z_1.z.nativeEnum(client_1.Type),
    game: z_1.z.nativeEnum(client_1.Game),
    price_id: z_1.z.string(),
    product_id: z_1.z.string(),
});
const BaseCreateOrderSchemaDTO = z_1.z.object({
    products: z_1.z.array(ProductSchema),
    currency: z_1.z.string().max(3),
});
class CreateOrderSchemaDTO extends (0, nestjs_zod_1.createZodDto)(BaseCreateOrderSchemaDTO) {
}
exports.CreateOrderSchemaDTO = CreateOrderSchemaDTO;
//# sourceMappingURL=create-order.schema.js.map