import { z } from "zod";
export declare const ZSendCredential: z.ZodObject<{
    credential_hashid: z.ZodString;
    service_hashid: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    credential_hashid: string;
    service_hashid: string;
}, {
    password: string;
    credential_hashid: string;
    service_hashid: string;
}>;
export type TSendCredential = z.infer<typeof ZSendCredential> & {
    admin_hashid: string;
};
declare const SendCredendialDTO_base: import("nestjs-zod").ZodDto<{
    password: string;
    credential_hashid: string;
    service_hashid: string;
}, z.ZodObjectDef<{
    credential_hashid: z.ZodString;
    service_hashid: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    password: string;
    credential_hashid: string;
    service_hashid: string;
}>;
export declare class SendCredendialDTO extends SendCredendialDTO_base {
}
export {};
