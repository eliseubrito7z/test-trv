import { Cache } from "@nestjs/cache-manager";
import { PaymentStatus, SessionStatus } from "@prisma/client";
import { PrismaService } from "src/infra/database/prisma.service";
import { IMailRepositoryClient } from "src/modules/mail/repositories/mail.repository";
import { ProductCredentialsRepository } from "src/modules/productCredentials/repositories/productCredentials.repository";
import { IProductsRepository } from "src/modules/products/repositories/products.repository";
export declare class WebhookRepository {
    private readonly prisma;
    private readonly productRepository;
    private cacheManager;
    private readonly mailRepository;
    private readonly productCredentialsRepository;
    constructor(prisma: PrismaService, productRepository: IProductsRepository, cacheManager: Cache, mailRepository: IMailRepositoryClient, productCredentialsRepository: ProductCredentialsRepository);
    checkout(session_id: string, session_status: SessionStatus): Promise<void>;
    payment_intent(session_id: string, payment_status: PaymentStatus): Promise<void>;
}
