import { JwtService } from "@nestjs/jwt";
import { IAuthAdminRepository } from "../repositories/admin.repository";
import { CreateAdminDTO } from "../dto/CreateAdmin.dto";
export declare class RegisterAdminUseCase {
    private readonly repository;
    private readonly jwtService;
    constructor(repository: IAuthAdminRepository, jwtService: JwtService);
    execute(data: CreateAdminDTO): Promise<{
        access_token: string;
    }>;
}
