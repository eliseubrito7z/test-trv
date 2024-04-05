"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvideCredentialSchemaDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const provideCredentialSchema = z_1.z.object({
    product_id: z_1.z.string(),
    order_hashid: z_1.z.string(),
    credential_hashid: z_1.z.string()
});
class ProvideCredentialSchemaDTO extends (0, nestjs_zod_1.createZodDto)(provideCredentialSchema) {
}
exports.ProvideCredentialSchemaDTO = ProvideCredentialSchemaDTO;
//# sourceMappingURL=provide-credential.schema.js.map