import { CreateUserDTO } from '../dto/user.dto';
import { IUserRepository } from '../repositories/user.repository';
import { JwtService } from '@nestjs/jwt';
import { IMailRepositoryClient } from 'src/modules/mail/repositories/mail.repository';
export declare class CreateUserUseCase {
    private userRepository;
    private readonly jwtService;
    private readonly mailRepository;
    constructor(userRepository: IUserRepository, jwtService: JwtService, mailRepository: IMailRepositoryClient);
    execute(data: CreateUserDTO): Promise<void>;
}
