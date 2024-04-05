"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZPaymentCompleted = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.ZPaymentCompleted = zod_1.z.object({
    email: zod_1.z.string().email(),
    order_hashid: zod_1.z.string(),
    locale: zod_1.z.nativeEnum(client_1.Locales)
});
//# sourceMappingURL=paymentCompleted.schema.js.map