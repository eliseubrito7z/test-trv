import { z } from 'nestjs-zod/z';
declare const CreateOrderSchemaDTO_base: import("nestjs-zod").ZodDto<{
    currency: string;
    products: {
        game: "RAINBOW" | "GTA";
        plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
        type: "BOOST" | "PACK" | "ACCOUNT";
        product_id: string;
        price_id: string;
    }[];
}, z.ZodObjectDef<{
    products: z.ZodArray<z.ZodObject<{
        plataform: z.ZodNativeEnum<{
            PC: "PC";
            PS4: "PS4";
            PS5: "PS5";
            XBOX_ONE: "XBOX_ONE";
            XBOX_SERIES: "XBOX_SERIES";
        }>;
        type: z.ZodNativeEnum<{
            BOOST: "BOOST";
            PACK: "PACK";
            ACCOUNT: "ACCOUNT";
        }>;
        game: z.ZodNativeEnum<{
            RAINBOW: "RAINBOW";
            GTA: "GTA";
        }>;
        price_id: z.ZodString;
        product_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        game: "RAINBOW" | "GTA";
        plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
        type: "BOOST" | "PACK" | "ACCOUNT";
        product_id: string;
        price_id: string;
    }, {
        game: "RAINBOW" | "GTA";
        plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
        type: "BOOST" | "PACK" | "ACCOUNT";
        product_id: string;
        price_id: string;
    }>, "many">;
    currency: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    currency: string;
    products: {
        game: "RAINBOW" | "GTA";
        plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
        type: "BOOST" | "PACK" | "ACCOUNT";
        product_id: string;
        price_id: string;
    }[];
}>;
export declare class CreateOrderSchemaDTO extends CreateOrderSchemaDTO_base {
}
export {};
