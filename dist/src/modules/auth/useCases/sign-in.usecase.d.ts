import { JwtService } from "@nestjs/jwt";
import { SignInDTO } from "../dto/sign-in.dto";
import { IUserRepository } from "../repositories/user.repository";
import { IMailRepositoryClient } from "src/modules/mail/repositories/mail.repository";
export declare class SignInUseCase {
    private jwtService;
    private userRepository;
    private readonly mailRepository;
    constructor(jwtService: JwtService, userRepository: IUserRepository, mailRepository: IMailRepositoryClient);
    execute(data: SignInDTO): Promise<{
        access_token: null;
    } | {
        access_token: string;
    }>;
}
