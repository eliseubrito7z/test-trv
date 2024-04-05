import { IAuthGuard } from 'src/infra/providers/guards/auth-guard.interface';
import { CreateOrderSchemaDTO } from './schemas/create-order.schema';
import { CreateOrderUseCase } from './useCases/create-order.usecase';
import { FindOrderUseCase } from './useCases/find-order.usecase';
import { HashId } from 'src/infra/database/hashid.service';
import { Cache } from '@nestjs/cache-manager';
export declare class OrdersController {
    private readonly createOrderUseCase;
    private readonly findOrderUseCase;
    private readonly hashid;
    private cacheManager;
    constructor(createOrderUseCase: CreateOrderUseCase, findOrderUseCase: FindOrderUseCase, hashid: HashId, cacheManager: Cache);
    create(data: CreateOrderSchemaDTO, req: IAuthGuard): Promise<{
        url: string;
    }>;
    findAll(req: IAuthGuard): Promise<{
        orders: {};
    }>;
    findByHashId(order_hashid: string, req: IAuthGuard): Promise<{
        order: import("./dto/order.dto").OrderDTO | null;
    }>;
}
