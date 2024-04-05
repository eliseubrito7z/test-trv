import { Credential } from "@prisma/client";
import { CredentialDTO } from "../dto/credential.dto";
export declare class CredentialMapper {
    credentialToDto(credential: Credential): CredentialDTO;
}
