import { Credential } from "@prisma/client";
import { AccessCredentials } from "../dto/AccessCredentials";
export declare class AdminCredentialMapper {
    prismaCredentialToAccessCredentials(credential: Credential): AccessCredentials;
}
