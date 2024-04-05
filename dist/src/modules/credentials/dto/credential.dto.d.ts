import { Credential } from "@prisma/client";
export type CredentialDTO = Omit<Credential, "id" | "password" | "user_id" | "active">;
