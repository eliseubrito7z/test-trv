import { ICredentialsRepository } from "../repositories/credentials.repository";
import { CreateCredentialDTO } from "../dto/create-credential.dto";
export declare class CreateCredentialUseCase {
    private readonly credentialsRepository;
    constructor(credentialsRepository: ICredentialsRepository);
    save(data: CreateCredentialDTO, user_hashid: string): Promise<import("../dto/credential.dto").CredentialDTO>;
}
