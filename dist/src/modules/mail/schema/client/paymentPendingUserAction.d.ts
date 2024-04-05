import { z } from "zod";
export declare const ZPaymentPendingUserAction: z.ZodObject<{
    email: z.ZodString;
    order_hashid: z.ZodString;
    locale: z.ZodNativeEnum<{
        BR: "BR";
        EN: "EN";
    }>;
}, "strip", z.ZodTypeAny, {
    email: string;
    order_hashid: string;
    locale: "BR" | "EN";
}, {
    email: string;
    order_hashid: string;
    locale: "BR" | "EN";
}>;
export type TPaymentPendingUserAction = z.infer<typeof ZPaymentPendingUserAction>;
