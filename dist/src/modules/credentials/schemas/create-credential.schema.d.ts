import { z } from 'nestjs-zod/z';
declare const CreateCredentialSchemaDTO_base: import("nestjs-zod").ZodDto<{
    password: string;
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    store: string;
    email: string;
    nickname: string;
    confirm_password: string;
    confirm_email: string;
    observations?: string | undefined;
}, z.ZodEffectsDef<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<{
    game: z.ZodNativeEnum<{
        RAINBOW: "RAINBOW";
        GTA: "GTA";
    }>;
    plataform: z.ZodNativeEnum<{
        PC: "PC";
        PS4: "PS4";
        PS5: "PS5";
        XBOX_ONE: "XBOX_ONE";
        XBOX_SERIES: "XBOX_SERIES";
    }>;
    email: z.ZodString;
    confirm_email: z.ZodString;
    password: z.ZodString;
    confirm_password: z.ZodString;
    nickname: z.ZodString;
    observations: z.ZodOptional<z.ZodString>;
    store: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    store: string;
    email: string;
    nickname: string;
    confirm_password: string;
    confirm_email: string;
    observations?: string | undefined;
}, {
    password: string;
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    store: string;
    email: string;
    nickname: string;
    confirm_password: string;
    confirm_email: string;
    observations?: string | undefined;
}>, {
    password: string;
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    store: string;
    email: string;
    nickname: string;
    confirm_password: string;
    confirm_email: string;
    observations?: string | undefined;
}, {
    password: string;
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    store: string;
    email: string;
    nickname: string;
    confirm_password: string;
    confirm_email: string;
    observations?: string | undefined;
}>, {
    password: string;
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    store: string;
    email: string;
    nickname: string;
    confirm_password: string;
    confirm_email: string;
    observations?: string | undefined;
}, {
    password: string;
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    store: string;
    email: string;
    nickname: string;
    confirm_password: string;
    confirm_email: string;
    observations?: string | undefined;
}>, {
    password: string;
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    store: string;
    email: string;
    nickname: string;
    confirm_password: string;
    confirm_email: string;
    observations?: string | undefined;
}, {
    password: string;
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    store: string;
    email: string;
    nickname: string;
    confirm_password: string;
    confirm_email: string;
    observations?: string | undefined;
}>>, {
    password: string;
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    store: string;
    email: string;
    nickname: string;
    confirm_password: string;
    confirm_email: string;
    observations?: string | undefined;
}>;
export declare class CreateCredentialSchemaDTO extends CreateCredentialSchemaDTO_base {
}
export {};
