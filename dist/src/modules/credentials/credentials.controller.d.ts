import { IAuthGuard } from 'src/infra/providers/guards/auth-guard.interface';
import { ICredentialsRepository } from './repositories/credentials.repository';
import { CreateCredentialSchemaDTO } from './schemas/create-credential.schema';
import { CreateCredentialUseCase } from './usecases/create-credential.usecase';
import { HashId } from 'src/infra/database/hashid.service';
import { Cache } from '@nestjs/cache-manager';
export declare class CredentialsController {
    private readonly createCredentialUseCase;
    private readonly credentialsRepository;
    private readonly hashid;
    private cacheManager;
    constructor(createCredentialUseCase: CreateCredentialUseCase, credentialsRepository: ICredentialsRepository, hashid: HashId, cacheManager: Cache);
    getUserCredentials(req: IAuthGuard): Promise<{
        credentials: {};
    }>;
    create(data: CreateCredentialSchemaDTO, req: IAuthGuard): Promise<{
        credential: import("./dto/credential.dto").CredentialDTO;
    }>;
    disableUserCredential(credential_hashid: string, req: IAuthGuard): Promise<void>;
    findCredentialById(credential_hashid: string, req: IAuthGuard): Promise<{
        credential: import("./dto/credential.dto").CredentialDTO;
    }>;
}
