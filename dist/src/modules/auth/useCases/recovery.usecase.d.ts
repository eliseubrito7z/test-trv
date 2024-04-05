import { IUserRepository } from "../repositories/user.repository";
import { TPasswordRecoverySchemaDTO } from "../schemas/password-recovery.schema";
import { JwtService } from "@nestjs/jwt";
export declare class PasswordRecoveryUseCase {
    private readonly repository;
    private jwtService;
    constructor(repository: IUserRepository, jwtService: JwtService);
    execute(data: TPasswordRecoverySchemaDTO): Promise<{
        user_email: string;
        token: string;
        locale: import(".prisma/client").$Enums.Locales;
    }>;
}
