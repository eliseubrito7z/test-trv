import { IUserRepository } from "../repositories/user.repository";
import { PasswordResetDto } from "../schemas/password-reset.schema";
export declare class PasswordResetUseCase {
    private readonly repository;
    constructor(repository: IUserRepository);
    execute(data: PasswordResetDto): Promise<void>;
}
