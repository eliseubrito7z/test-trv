import { z } from "zod";
export type PasswordResetDto = {
    password: string;
    user_id: string;
};
declare const PasswordResetSchemaDTO_base: import("nestjs-zod").ZodDto<{
    password: string;
    confirm_password: string;
}, z.ZodEffectsDef<z.ZodEffects<z.ZodObject<{
    password: z.ZodString;
    confirm_password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    confirm_password: string;
}, {
    password: string;
    confirm_password: string;
}>, {
    password: string;
    confirm_password: string;
}, {
    password: string;
    confirm_password: string;
}>>, {
    password: string;
    confirm_password: string;
}>;
export declare class PasswordResetSchemaDTO extends PasswordResetSchemaDTO_base {
}
export {};
