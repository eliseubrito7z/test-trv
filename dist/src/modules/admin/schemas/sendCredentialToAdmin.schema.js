"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendCredendialDTO = exports.ZSendCredential = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
exports.ZSendCredential = zod_1.z.object({
    credential_hashid: zod_1.z.string(),
    service_hashid: zod_1.z.string(),
    password: zod_1.z.string().min(8)
});
class SendCredendialDTO extends (0, nestjs_zod_1.createZodDto)(exports.ZSendCredential) {
}
exports.SendCredendialDTO = SendCredendialDTO;
//# sourceMappingURL=sendCredentialToAdmin.schema.js.map