import { z } from "nestjs-zod/z";
export declare const ZNewProduct: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    title_en: z.ZodString;
    title_br: z.ZodString;
    subtitle_en: z.ZodString;
    subtitle_br: z.ZodString;
    item_description_en: z.ZodString;
    item_description_br: z.ZodString;
    price_en: z.ZodNumber;
    price_br: z.ZodNumber;
    game: z.ZodNativeEnum<{
        RAINBOW: "RAINBOW";
        GTA: "GTA";
    }>;
    type: z.ZodNativeEnum<{
        BOOST: "BOOST";
        PACK: "PACK";
        ACCOUNT: "ACCOUNT";
    }>;
    plataform: z.ZodNativeEnum<{
        PC: "PC";
        PS4: "PS4";
        PS5: "PS5";
        XBOX_ONE: "XBOX_ONE";
        XBOX_SERIES: "XBOX_SERIES";
    }>;
    quantity: z.ZodNumber;
    account: z.ZodNullable<z.ZodEffects<z.ZodObject<{
        email: z.ZodString;
        confirm_email: z.ZodString;
        password: z.ZodString;
        confirm_password: z.ZodString;
        nickname: z.ZodString;
        store: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        password: string;
        store: string | null;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
    }, {
        password: string;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
        store?: string | null | undefined;
    }>, {
        password: string;
        store: string | null;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
    }, {
        password: string;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
        store?: string | null | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    type: "BOOST" | "PACK" | "ACCOUNT";
    quantity: number;
    item_description_br: string;
    item_description_en: string;
    title_en: string;
    title_br: string;
    subtitle_en: string;
    subtitle_br: string;
    price_en: number;
    price_br: number;
    account: {
        password: string;
        store: string | null;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
    } | null;
}, {
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    type: "BOOST" | "PACK" | "ACCOUNT";
    quantity: number;
    item_description_br: string;
    item_description_en: string;
    title_en: string;
    title_br: string;
    subtitle_en: string;
    subtitle_br: string;
    price_en: number;
    price_br: number;
    account: {
        password: string;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
        store?: string | null | undefined;
    } | null;
}>, {
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    type: "BOOST" | "PACK" | "ACCOUNT";
    quantity: number;
    item_description_br: string;
    item_description_en: string;
    title_en: string;
    title_br: string;
    subtitle_en: string;
    subtitle_br: string;
    price_en: number;
    price_br: number;
    account: {
        password: string;
        store: string | null;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
    } | null;
}, {
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    type: "BOOST" | "PACK" | "ACCOUNT";
    quantity: number;
    item_description_br: string;
    item_description_en: string;
    title_en: string;
    title_br: string;
    subtitle_en: string;
    subtitle_br: string;
    price_en: number;
    price_br: number;
    account: {
        password: string;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
        store?: string | null | undefined;
    } | null;
}>, {
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    type: "BOOST" | "PACK" | "ACCOUNT";
    quantity: number;
    item_description_br: string;
    item_description_en: string;
    title_en: string;
    title_br: string;
    subtitle_en: string;
    subtitle_br: string;
    price_en: number;
    price_br: number;
    account: {
        password: string;
        store: string | null;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
    } | null;
}, {
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    type: "BOOST" | "PACK" | "ACCOUNT";
    quantity: number;
    item_description_br: string;
    item_description_en: string;
    title_en: string;
    title_br: string;
    subtitle_en: string;
    subtitle_br: string;
    price_en: number;
    price_br: number;
    account: {
        password: string;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
        store?: string | null | undefined;
    } | null;
}>;
export type TNewProduct = z.infer<typeof ZNewProduct>;
declare const CreateProductDTO_base: import("nestjs-zod").ZodDto<{
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    type: "BOOST" | "PACK" | "ACCOUNT";
    quantity: number;
    item_description_br: string;
    item_description_en: string;
    title_en: string;
    title_br: string;
    subtitle_en: string;
    subtitle_br: string;
    price_en: number;
    price_br: number;
    account: {
        password: string;
        store: string | null;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
    } | null;
}, z.ZodEffectsDef<z.ZodEffects<z.ZodObject<{
    title_en: z.ZodString;
    title_br: z.ZodString;
    subtitle_en: z.ZodString;
    subtitle_br: z.ZodString;
    item_description_en: z.ZodString;
    item_description_br: z.ZodString;
    price_en: z.ZodNumber;
    price_br: z.ZodNumber;
    game: z.ZodNativeEnum<{
        RAINBOW: "RAINBOW";
        GTA: "GTA";
    }>;
    type: z.ZodNativeEnum<{
        BOOST: "BOOST";
        PACK: "PACK";
        ACCOUNT: "ACCOUNT";
    }>;
    plataform: z.ZodNativeEnum<{
        PC: "PC";
        PS4: "PS4";
        PS5: "PS5";
        XBOX_ONE: "XBOX_ONE";
        XBOX_SERIES: "XBOX_SERIES";
    }>;
    quantity: z.ZodNumber;
    account: z.ZodNullable<z.ZodEffects<z.ZodObject<{
        email: z.ZodString;
        confirm_email: z.ZodString;
        password: z.ZodString;
        confirm_password: z.ZodString;
        nickname: z.ZodString;
        store: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        password: string;
        store: string | null;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
    }, {
        password: string;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
        store?: string | null | undefined;
    }>, {
        password: string;
        store: string | null;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
    }, {
        password: string;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
        store?: string | null | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    type: "BOOST" | "PACK" | "ACCOUNT";
    quantity: number;
    item_description_br: string;
    item_description_en: string;
    title_en: string;
    title_br: string;
    subtitle_en: string;
    subtitle_br: string;
    price_en: number;
    price_br: number;
    account: {
        password: string;
        store: string | null;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
    } | null;
}, {
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    type: "BOOST" | "PACK" | "ACCOUNT";
    quantity: number;
    item_description_br: string;
    item_description_en: string;
    title_en: string;
    title_br: string;
    subtitle_en: string;
    subtitle_br: string;
    price_en: number;
    price_br: number;
    account: {
        password: string;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
        store?: string | null | undefined;
    } | null;
}>, {
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    type: "BOOST" | "PACK" | "ACCOUNT";
    quantity: number;
    item_description_br: string;
    item_description_en: string;
    title_en: string;
    title_br: string;
    subtitle_en: string;
    subtitle_br: string;
    price_en: number;
    price_br: number;
    account: {
        password: string;
        store: string | null;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
    } | null;
}, {
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    type: "BOOST" | "PACK" | "ACCOUNT";
    quantity: number;
    item_description_br: string;
    item_description_en: string;
    title_en: string;
    title_br: string;
    subtitle_en: string;
    subtitle_br: string;
    price_en: number;
    price_br: number;
    account: {
        password: string;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
        store?: string | null | undefined;
    } | null;
}>>, {
    game: "RAINBOW" | "GTA";
    plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    type: "BOOST" | "PACK" | "ACCOUNT";
    quantity: number;
    item_description_br: string;
    item_description_en: string;
    title_en: string;
    title_br: string;
    subtitle_en: string;
    subtitle_br: string;
    price_en: number;
    price_br: number;
    account: {
        password: string;
        email: string;
        nickname: string;
        confirm_password: string;
        confirm_email: string;
        store?: string | null | undefined;
    } | null;
}>;
export declare class CreateProductDTO extends CreateProductDTO_base {
}
export {};
