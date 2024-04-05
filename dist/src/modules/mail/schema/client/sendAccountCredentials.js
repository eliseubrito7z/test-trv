"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZSendAccountCredentials = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const ZAccount = zod_1.z.object({
    product_id: zod_1.z.string(),
    account_email: zod_1.z.string().email(),
    account_password: zod_1.z.string(),
    account_nickname: zod_1.z.string(),
    account_plataform: zod_1.z.nativeEnum(client_1.Plataform),
    account_store: zod_1.z.string().nullable(),
});
exports.ZSendAccountCredentials = zod_1.z.object({
    email: zod_1.z.string().email(),
    customer_name: zod_1.z.string(),
    order_hashid: zod_1.z.string(),
    locale: zod_1.z.nativeEnum(client_1.Locales),
    accounts: zod_1.z.array(ZAccount)
});
//# sourceMappingURL=sendAccountCredentials.js.map