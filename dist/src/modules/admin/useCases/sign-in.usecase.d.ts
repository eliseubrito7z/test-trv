import { JwtService } from "@nestjs/jwt";
import { SignInDTO } from "src/modules/auth/dto/sign-in.dto";
import { IAuthAdminRepository } from "../repositories/admin.repository";
export declare class SignInUseCase {
    private jwtService;
    private repository;
    constructor(jwtService: JwtService, repository: IAuthAdminRepository);
    execute(data: SignInDTO): Promise<{
        access_token: string;
    }>;
}
