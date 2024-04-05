import { IAdminCredentialsRepository } from "./admin.repository";
import { PrismaService } from "src/infra/database/prisma.service";
import { AccessCredentials } from "../dto/AccessCredentials";
import { AdminCredentialMapper } from "../mappers/credential.mapper";
import { TSendCredential } from "../schemas/sendCredentialToAdmin.schema";
import { IMailRepositoryAdm } from "src/modules/mail/repositories/mail.repository";
export declare class AdminCredentialRepository implements IAdminCredentialsRepository {
    private readonly prisma;
    private readonly mapper;
    private readonly mailRepository;
    constructor(prisma: PrismaService, mapper: AdminCredentialMapper, mailRepository: IMailRepositoryAdm);
    sendCredentialToAdmin(data: TSendCredential): Promise<AccessCredentials>;
}
