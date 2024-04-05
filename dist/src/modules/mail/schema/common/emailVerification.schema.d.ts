import { z } from "zod";
export declare const ZEmailVerification: z.ZodObject<{
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
export type TEmailVerification = z.infer<typeof ZEmailVerification>;
