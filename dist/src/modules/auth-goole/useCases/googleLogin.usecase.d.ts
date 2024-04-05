import { GoogleRepository } from "../auth-google.repository";
import { GoogleUserDTO } from "../dto/GoogleUser.dto";
import { JwtService } from "@nestjs/jwt";
export declare class GoogleLoginUseCase {
    private readonly googleRepository;
    private readonly jwtService;
    constructor(googleRepository: GoogleRepository, jwtService: JwtService);
    execute(userFromGoogle: GoogleUserDTO | undefined): Promise<{
        access_token: string;
    }>;
}
