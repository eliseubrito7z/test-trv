"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCredentialSchemaDTO = void 0;
const client_1 = require("@prisma/client");
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const GamesEnumSchema = z_1.z.nativeEnum(client_1.$Enums.Game);
const PlataformsEnumSchema = z_1.z.nativeEnum(client_1.$Enums.Plataform);
const CreateCredentialSchema = z_1.z
    .object({
    game: GamesEnumSchema,
    plataform: PlataformsEnumSchema,
    email: z_1.z.string().email().max(320),
    confirm_email: z_1.z.string().email().max(320),
    password: z_1.z.string(),
    confirm_password: z_1.z.string(),
    nickname: z_1.z.string().min(3).max(40),
    observations: z_1.z.string().max(255).optional(),
    store: z_1.z.string().max(40)
})
    .refine((data) => data.password == data.confirm_password, {
    path: ['confirm_password'],
    message: "Password don't match.",
})
    .refine((data) => data.email == data.confirm_email, {
    path: ['confirm_email'],
    message: "Email don't match.",
})
    .refine((data) => data.plataform == client_1.$Enums.Plataform.PC ? data.store.length > 0 : true, {
    path: ['store'],
    message: "Store name is required for PC accounts.",
})
    .refine((data) => data.plataform == client_1.$Enums.Plataform.PC ? data.store.length > 3 : true, {
    path: ['store'],
    message: "Store name must be greater then 3 characters.",
});
class CreateCredentialSchemaDTO extends (0, nestjs_zod_1.createZodDto)(CreateCredentialSchema) {
}
exports.CreateCredentialSchemaDTO = CreateCredentialSchemaDTO;
//# sourceMappingURL=create-credential.schema.js.map