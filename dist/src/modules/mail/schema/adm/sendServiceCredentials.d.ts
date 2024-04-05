import { z } from "zod";
export declare const ZSendServiceCredentials: z.ZodObject<{
    email: z.ZodString;
    service_hashid: z.ZodString;
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
    email: string;
    service_hashid: string;
    account_email: string;
    account_password: string;
    account_nickname: string;
    account_plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    account_store: string | null;
}, {
    email: string;
    service_hashid: string;
    account_email: string;
    account_password: string;
    account_nickname: string;
    account_plataform: "PC" | "PS4" | "PS5" | "XBOX_ONE" | "XBOX_SERIES";
    account_store: string | null;
}>;
export type TSendServiceCredentials = z.infer<typeof ZSendServiceCredentials>;
