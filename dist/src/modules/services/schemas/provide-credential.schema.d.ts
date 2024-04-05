import { z } from "nestjs-zod/z";
declare const provideCredentialSchema: z.ZodObject<{
    product_id: z.ZodString;
    order_hashid: z.ZodString;
    credential_hashid: z.ZodString;
}, "strip", z.ZodTypeAny, {
    product_id: string;
    credential_hashid: string;
    order_hashid: string;
}, {
    product_id: string;
    credential_hashid: string;
    order_hashid: string;
}>;
export type ProvideCredentialDTO = z.infer<typeof provideCredentialSchema>;
declare const ProvideCredentialSchemaDTO_base: import("nestjs-zod").ZodDto<{
    product_id: string;
    credential_hashid: string;
    order_hashid: string;
}, z.ZodObjectDef<{
    product_id: z.ZodString;
    order_hashid: z.ZodString;
    credential_hashid: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    product_id: string;
    credential_hashid: string;
    order_hashid: string;
}>;
export declare class ProvideCredentialSchemaDTO extends ProvideCredentialSchemaDTO_base {
}
export {};
