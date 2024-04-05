import { Credential } from "@prisma/client";
export type AccessCredentials = Omit<Credential, 'id' | 'user_id' | 'active' | 'created_at'>;
