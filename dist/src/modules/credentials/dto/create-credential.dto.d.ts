import { Credential } from "@prisma/client";
export type CreateCredentialDTO = Omit<Credential, "id" | "active" | "created_at" | "external_id" | "user_id" | 'password'> & {
    password: string;
};
