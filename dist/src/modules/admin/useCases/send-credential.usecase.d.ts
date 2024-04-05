import { PrismaService } from "src/infra/database/prisma.service";
import { TSendCredential } from "../schemas/sendCredentialToAdmin.schema";
import { IAdminCredentialsRepository } from "../repositories/admin.repository";
export declare class SendCredentialUseCase {
    private readonly prisma;
    private readonly credentialRepository;
    constructor(prisma: PrismaService, credentialRepository: IAdminCredentialsRepository);
    execute(data: TSendCredential): Promise<void>;
}
