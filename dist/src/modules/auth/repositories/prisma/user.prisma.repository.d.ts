import { IUserRepository } from "../user.repository";
import { CreateUserDTO, UserDTO } from "../../dto/user.dto";
import { PrismaService } from 'src/infra/database/prisma.service';
import { UpdatePasswordDto } from '../../dto/update-password.dto';
export declare class UserPrismaRepository implements IUserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): Promise<UserDTO | null>;
    save(data: CreateUserDTO): Promise<UserDTO>;
    findEmailByExternalId(external_id: string): Promise<string | null>;
    updatePassword(data: UpdatePasswordDto): Promise<void>;
    confirmEmail(external_id: string): Promise<void>;
}
