import { PrismaService } from "src/infra/database/prisma.service";
import { ProductCredentialsRepository } from "../repositories/productCredentials.repository";
export declare class FindOrderAndSendUseCase {
    private readonly prisma;
    private readonly repository;
    constructor(prisma: PrismaService, repository: ProductCredentialsRepository);
    execute(order_id: string): Promise<void>;
}
