import { CreateCredentialDTO } from "../dto/create-credential.dto";
import { CredentialDTO } from "../dto/credential.dto";
import { FindExistingCredentialDTO } from "../dto/find-credential.dto";
export declare abstract class ICredentialsRepository {
    abstract save(data: CreateCredentialDTO, user_hashid: string): Promise<CredentialDTO>;
    abstract findExistingCredential(data: FindExistingCredentialDTO, user_hashid: string): Promise<string | null>;
    abstract findUserCredentials(user_hashid: string): Promise<Array<CredentialDTO> | null>;
    abstract disableCredential(user_hashid: string, credential_hashid: string): Promise<void>;
    abstract findCredentialById(credential_hashid: string, user_id: number): Promise<CredentialDTO>;
}
