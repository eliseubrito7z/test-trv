import { CreateOrderDTO } from "../dto/create-order.dto";
import { IOrderPrismaRepository, IOrderStripeRepository } from "../repositories/order.repository";
import { IUserRepository } from "src/modules/auth/repositories/user.repository";
import { HashId } from "src/infra/database/hashid.service";
import { Cache } from "@nestjs/cache-manager";
import { PrismaService } from "src/infra/database/prisma.service";
import { IProductsRepository } from "src/modules/products/repositories/products.repository";
export declare class CreateOrderUseCase {
    private userPrismaRepository;
    private orderPrismaRepository;
    private orderStripeRepository;
    private hashIds;
    private cacheManager;
    private prisma;
    private productRepository;
    constructor(userPrismaRepository: IUserRepository, orderPrismaRepository: IOrderPrismaRepository, orderStripeRepository: IOrderStripeRepository, hashIds: HashId, cacheManager: Cache, prisma: PrismaService, productRepository: IProductsRepository);
    execute(data: CreateOrderDTO): Promise<string>;
}
