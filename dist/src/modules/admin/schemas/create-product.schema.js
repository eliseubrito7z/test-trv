"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDTO = exports.ZNewProduct = void 0;
const client_1 = require("@prisma/client");
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const title = z_1.z.string().max(250);
const subtitle = z_1.z.string().max(250);
const item_description = z_1.z.string().max(500);
const price = z_1.z.number().min(1);
const game = z_1.z.nativeEnum(client_1.Game);
const type = z_1.z.nativeEnum(client_1.Type);
const plataform = z_1.z.nativeEnum(client_1.Plataform);
const account = z_1.z.object({
    email: z_1.z.string().email(),
    confirm_email: z_1.z.string().email(),
    password: z_1.z.string(),
    confirm_password: z_1.z.string(),
    nickname: z_1.z.string().min(3),
    store: z_1.z.string().nullable().default(null)
})
    .refine((data) => data.password == data.confirm_password, {
    path: ['confirm_password'],
    message: "Password don't match.",
});
exports.ZNewProduct = z_1.z.object({
    title_en: title, title_br: title,
    subtitle_en: subtitle, subtitle_br: subtitle,
    item_description_en: item_description, item_description_br: item_description,
    price_en: price, price_br: price,
    game: game,
    type: type,
    plataform: plataform,
    quantity: z_1.z.number().min(1),
    account: account.nullable()
})
    .refine(data => {
    if (data.type == client_1.Type.ACCOUNT) {
        if (data.plataform != client_1.Plataform.PC && data.account) {
            data.account.store = null;
        }
        return data.account != null;
    }
    return true;
}, {
    message: "the fields [email, password, nickname] is required when the product type is [ACCOUNT]",
    path: ['account']
})
    .refine(data => {
    if (data.plataform == client_1.Plataform.PC && data.type == client_1.Type.ACCOUNT) {
        return data.account.store != null;
    }
    return true;
}, {
    message: "In PC Accounts the field [store] is required.",
    path: ['account.store']
});
class CreateProductDTO extends (0, nestjs_zod_1.createZodDto)(exports.ZNewProduct) {
}
exports.CreateProductDTO = CreateProductDTO;
//# sourceMappingURL=create-product.schema.js.map