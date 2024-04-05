import { SignInDTO } from './dto/sign-in.dto';
import { CreateUserSchemaDTO } from './schemas/create-user.schema';
import { CreateUserUseCase } from './useCases/create-user.usecase';
import { SignInUseCase } from './useCases/sign-in.usecase';
import { PasswordRecoverySchemaDTO } from './schemas/password-recovery.schema';
import { PasswordRecoveryUseCase } from './useCases/recovery.usecase';
import { IMailRepositoryClient } from '../mail/repositories/mail.repository';
import { PasswordResetSchemaDTO } from './schemas/password-reset.schema';
import { PasswordResetUseCase } from './useCases/password-reset.usecase';
import { IAuthGuard } from 'src/infra/providers/guards/auth-guard.interface';
import { EmailConfirmUseCase } from './useCases/emailConfirm.usecase';
export declare class AuthController {
    private readonly signInUseCase;
    private readonly createUserUseCase;
    private readonly recoveryUseCase;
    private readonly passwordResetUseCase;
    private readonly mailRepository;
    private readonly emailConfirmUseCase;
    constructor(signInUseCase: SignInUseCase, createUserUseCase: CreateUserUseCase, recoveryUseCase: PasswordRecoveryUseCase, passwordResetUseCase: PasswordResetUseCase, mailRepository: IMailRepositoryClient, emailConfirmUseCase: EmailConfirmUseCase);
    signIn(signInDto: SignInDTO): Promise<{
        access_token: string | null;
    }>;
    signUp(data: CreateUserSchemaDTO): Promise<void>;
    recovery(data: PasswordRecoverySchemaDTO): Promise<void>;
    resetPassword(data: PasswordResetSchemaDTO, req: IAuthGuard): Promise<void>;
    confimEmail(token: string): Promise<void>;
}
