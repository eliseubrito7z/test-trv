import { IOrderPrismaRepository } from "../order.repository";
import { PrismaService } from "src/infra/database/prisma.service";
import { CreateOrderPrismaDTO } from "../../dto/create-order.dto";
import { OrderDTO } from "../../dto/order.dto";
import { OrderMapper } from "../../mapper/orderMapper";
export declare class OrderPrismaRepository implements IOrderPrismaRepository {
    private prisma;
    private mapper;
    constructor(prisma: PrismaService, mapper: OrderMapper);
    create(data: CreateOrderPrismaDTO): Promise<OrderDTO>;
    findByHashId(order_hashid: string, user_id: number): Promise<OrderDTO | null>;
    findByUser(user_hashid: string): Promise<OrderDTO[] | null>;
}
