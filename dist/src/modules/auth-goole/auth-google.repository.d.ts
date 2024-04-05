import { PrismaService } from 'src/infra/database/prisma.service';
import { GoogleUserDTO } from './dto/GoogleUser.dto';
import { ExternalUser } from './dto/User.dto';
export declare class GoogleRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    googleSave(_user: GoogleUserDTO): Promise<ExternalUser>;
    find(email: string): Promise<ExternalUser | null>;
}
