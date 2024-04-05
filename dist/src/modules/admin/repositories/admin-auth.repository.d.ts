import { PrismaService } from "src/infra/database/prisma.service";
import { IAuthAdminRepository } from "./admin.repository";
import { AdminUserDTO } from "../dto/AdminUser.dto";
import { CreateAdminDTO } from "../dto/CreateAdmin.dto";
export declare class AuthAdminRepository implements IAuthAdminRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<AdminUserDTO | null>;
    findByExternalId(external_id: string): Promise<{
        external_id: string | null;
        fullname: string;
        email: string;
        password: string;
        created_at: Date;
    } | null>;
    registerNewAdminUser(data: CreateAdminDTO): Promise<{
        external_id: string | null;
        fullname: string;
        email: string;
        password: string;
        created_at: Date;
    }>;
}
