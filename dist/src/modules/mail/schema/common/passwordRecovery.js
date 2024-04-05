"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZPasswordRecovery = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.ZPasswordRecovery = zod_1.z.object({
    email: zod_1.z.string().email(),
    token: zod_1.z.string(),
    locale: zod_1.z.nativeEnum(client_1.Locales)
});
//# sourceMappingURL=passwordRecovery.js.map