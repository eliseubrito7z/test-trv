import { z } from "zod";
declare const ZAccount: z.ZodObject<{
    product_id: z.ZodString;
    account_email: z.ZodString;
    account_password: z.ZodString;
    account_nickname: z.ZodString;
    account_plataform: z.ZodNativeEnum<{
        PC: "PC";
        PS4: "PS4";
        PS5: "PS5";
        XBOX_ONE: "XBOX_ONE";
        XBOX_SERIES: "XBOX_SERIES";
    }>;
    account_store: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    product_id: string;
    account_email: string;
    account_password: string;
    account_nickname: string;
    account_plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    account_store: string | null;
}, {
    product_id: string;
    account_email: string;
    account_password: string;
    account_nickname: string;
    account_plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    account_store: string | null;
}>;
export declare const ZSendAccountCredentials: z.ZodObject<{
    email: z.ZodString;
    customer_name: z.ZodString;
    order_hashid: z.ZodString;
    locale: z.ZodNativeEnum<{
        BR: "BR";
        EN: "EN";
    }>;
    accounts: z.ZodArray<z.ZodObject<{
        product_id: z.ZodString;
        account_email: z.ZodString;
        account_password: z.ZodString;
        account_nickname: z.ZodString;
        account_plataform: z.ZodNativeEnum<{
            PC: "PC";
            PS4: "PS4";
            PS5: "PS5";
            XBOX_ONE: "XBOX_ONE";
            XBOX_SERIES: "XBOX_SERIES";
        }>;
        account_store: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        product_id: string;
        account_email: string;
        account_password: string;
        account_nickname: string;
        account_plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
        account_store: string | null;
    }, {
        product_id: string;
        account_email: string;
        account_password: string;
        account_nickname: string;
        account_plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
        account_store: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    email: string;
    customer_name: string;
    order_hashid: string;
    locale: "BR" | "EN";
    accounts: {
        product_id: string;
        account_email: string;
        account_password: string;
        account_nickname: string;
        account_plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
        account_store: string | null;
    }[];
}, {
    email: string;
    customer_name: string;
    order_hashid: string;
    locale: "BR" | "EN";
    accounts: {
        product_id: string;
        account_email: string;
        account_password: string;
        account_nickname: string;
        account_plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
        account_store: string | null;
    }[];
}>;
export type TSendAccountCredentials = z.infer<typeof ZSendAccountCredentials>;
export type TAccount = z.infer<typeof ZAccount>;
export {};
