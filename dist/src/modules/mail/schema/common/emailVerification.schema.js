"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZEmailVerification = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.ZEmailVerification = zod_1.z.object({
    email: zod_1.z.string().email(),
    token: zod_1.z.string(),
    locale: zod_1.z.nativeEnum(client_1.Locales)
});
//# sourceMappingURL=emailVerification.schema.js.map