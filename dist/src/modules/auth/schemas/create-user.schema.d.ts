import { z } from 'nestjs-zod/z';
declare const CreateUserSchemaDTO_base: import("nestjs-zod").ZodDto<{
    password: string;
    email: string;
    fullname: string;
    locale: "BR" | "EN";
    confirm_password: string;
}, z.ZodEffectsDef<z.ZodEffects<z.ZodObject<{
    fullname: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    confirm_password: z.ZodString;
    locale: z.ZodNativeEnum<{
        BR: "BR";
        EN: "EN";
    }>;
}, "strip", z.ZodTypeAny, {
    password: string;
    email: string;
    fullname: string;
    locale: "BR" | "EN";
    confirm_password: string;
}, {
    password: string;
    email: string;
    fullname: string;
    locale: "BR" | "EN";
    confirm_password: string;
}>, {
    password: string;
    email: string;
    fullname: string;
    locale: "BR" | "EN";
    confirm_password: string;
}, {
    password: string;
    email: string;
    fullname: string;
    locale: "BR" | "EN";
    confirm_password: string;
}>>, {
    password: string;
    email: string;
    fullname: string;
    locale: "BR" | "EN";
    confirm_password: string;
}>;
export declare class CreateUserSchemaDTO extends CreateUserSchemaDTO_base {
}
export declare const CreateUserResponseSchemaDTO: z.ZodObject<Omit<{
    fullname: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    confirm_password: z.ZodString;
    locale: z.ZodNativeEnum<{
        BR: "BR";
        EN: "EN";
    }>;
}, "password">, "strip", z.ZodTypeAny, {
    email: string;
    fullname: string;
    locale: "BR" | "EN";
    confirm_password: string;
}, {
    email: string;
    fullname: string;
    locale: "BR" | "EN";
    confirm_password: string;
}>;
export type CreateUserResponseSchemaDTO = z.infer<typeof CreateUserResponseSchemaDTO>;
export {};
