import { IAdminOrdersRepository } from "./admin.repository";
import { PrismaService } from "src/infra/database/prisma.service";
import { OrderDTO } from "src/modules/orders/dto/order.dto";
import { FindAllOrdersFilter } from "../filters/orders.filters";
import { OrderSummary } from "../dto/OrderSummary";
import { AdminServiceMapper } from "../mappers/service.mapper";
export declare class AdminOrderRepository implements IAdminOrdersRepository {
    private readonly prisma;
    private readonly serviceMapper;
    constructor(prisma: PrismaService, serviceMapper: AdminServiceMapper);
    findAll(filters: FindAllOrdersFilter): Promise<OrderDTO[] | null>;
    retrieve(order_hashid: string): Promise<OrderSummary>;
}
