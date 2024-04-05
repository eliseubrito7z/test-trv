import { ICredentialsRepository } from "./credentials.repository";
import { CreateCredentialDTO } from "../dto/create-credential.dto";
import { CredentialDTO } from "../dto/credential.dto";
import { PrismaService } from "src/infra/database/prisma.service";
import { FindExistingCredentialDTO } from "../dto/find-credential.dto";
import { CredentialMapper } from "../mapper/credential.mapper";
export declare class CredentialsPrismaRepository implements ICredentialsRepository {
    private readonly prisma;
    private readonly mapper;
    constructor(prisma: PrismaService, mapper: CredentialMapper);
    save(data: CreateCredentialDTO, user_hashid: string): Promise<CredentialDTO>;
    findExistingCredential(data: FindExistingCredentialDTO, user_hashid: string): Promise<string | null>;
    findUserCredentials(user_hashid: string): Promise<CredentialDTO[] | null>;
    disableCredential(user_hashid: string, credential_hashid: string): Promise<void>;
    findCredentialById(credential_hashid: string, user_id: number): Promise<CredentialDTO>;
}
