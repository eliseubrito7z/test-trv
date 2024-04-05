"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZSendServiceCredentials = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.ZSendServiceCredentials = zod_1.z.object({
    email: zod_1.z.string().email(),
    service_hashid: zod_1.z.string(),
    account_email: zod_1.z.string().email(),
    account_password: zod_1.z.string(),
    account_nickname: zod_1.z.string(),
    account_plataform: zod_1.z.nativeEnum(client_1.Plataform),
    account_store: zod_1.z.string().nullable(),
});
//# sourceMappingURL=sendServiceCredentials.js.map