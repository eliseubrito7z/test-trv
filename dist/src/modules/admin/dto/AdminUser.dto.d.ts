import { AdminAccess } from "@prisma/client";
export type AdminUserDTO = Omit<AdminAccess, 'id' | "created_at">;
