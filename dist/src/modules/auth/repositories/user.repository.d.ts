import { UpdatePasswordDto } from "../dto/update-password.dto";
import { CreateUserDTO, UserDTO } from "../dto/user.dto";
export declare abstract class IUserRepository {
    abstract findByEmail(email: string): Promise<UserDTO | null>;
    abstract save(data: CreateUserDTO): Promise<UserDTO>;
    abstract findEmailByExternalId(external_id: string): Promise<string | null>;
    abstract updatePassword(data: UpdatePasswordDto): Promise<void>;
    abstract confirmEmail(external_id: string): Promise<void>;
}
