import { JwtService } from "@nestjs/jwt";
import { IUserRepository } from "../repositories/user.repository";
export declare class EmailConfirmUseCase {
    private readonly jwtService;
    private readonly repository;
    constructor(jwtService: JwtService, repository: IUserRepository);
    execute(token: string): Promise<void>;
}
