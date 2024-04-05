import { IAuthGuard } from "src/infra/providers/guards/auth-guard.interface";
import { SendCredendialDTO } from "./schemas/sendCredentialToAdmin.schema";
import { SendCredentialUseCase } from "./useCases/send-credential.usecase";
export declare class AdminCredentialController {
    private readonly sendCredentialUseCase;
    constructor(sendCredentialUseCase: SendCredentialUseCase);
    sendCredential(data: SendCredendialDTO, req: IAuthGuard): Promise<void>;
}
