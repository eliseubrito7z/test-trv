import { z } from "zod";
export declare const ZPasswordRecovery: z.ZodObject<{
    email: z.ZodString;
    token: z.ZodString;
    locale: z.ZodNativeEnum<{
        BR: "BR";
        EN: "EN";
    }>;
}, "strip", z.ZodTypeAny, {
    email: string;
    locale: "BR" | "EN";
    token: string;
}, {
    email: string;
    locale: "BR" | "EN";
    token: string;
}>;
export type TPasswordRecovery = z.infer<typeof ZPasswordRecovery>;
