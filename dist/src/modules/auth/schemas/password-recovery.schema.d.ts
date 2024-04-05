import { z } from 'nestjs-zod/z';
declare const PasswordRecoverySchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export type TPasswordRecoverySchemaDTO = z.infer<typeof PasswordRecoverySchema>;
declare const PasswordRecoverySchemaDTO_base: import("nestjs-zod").ZodDto<{
    email: string;
}, z.ZodObjectDef<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    email: string;
}>;
export declare class PasswordRecoverySchemaDTO extends PasswordRecoverySchemaDTO_base {
}
export {};
