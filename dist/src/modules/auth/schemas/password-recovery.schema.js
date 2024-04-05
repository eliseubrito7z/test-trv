"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordRecoverySchemaDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const PasswordRecoverySchema = z_1.z.object({
    email: z_1.z.string().email(),
});
class PasswordRecoverySchemaDTO extends (0, nestjs_zod_1.createZodDto)(PasswordRecoverySchema) {
}
exports.PasswordRecoverySchemaDTO = PasswordRecoverySchemaDTO;
//# sourceMappingURL=password-recovery.schema.js.map