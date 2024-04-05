import { SignInDTO } from "../auth/dto/sign-in.dto";
import { SignInUseCase } from "./useCases/sign-in.usecase";
import { RegisterAdminUseCase } from "./useCases/register-admin.repository";
import { CreateUserDTO } from "../auth/dto/user.dto";
export declare class AdminAuthController {
    private readonly signInUseCase;
    private readonly register;
    constructor(signInUseCase: SignInUseCase, register: RegisterAdminUseCase);
    adminSignIn(data: SignInDTO): Promise<{
        access_token: string;
    }>;
    registerNewAdmin(data: CreateUserDTO): Promise<{
        access_token: string;
    }>;
}
