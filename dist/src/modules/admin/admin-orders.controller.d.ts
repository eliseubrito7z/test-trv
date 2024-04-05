import { IAdminOrdersRepository } from "./repositories/admin.repository";
export declare class AdminOrdersController {
    private readonly ordersRepository;
    constructor(ordersRepository: IAdminOrdersRepository);
    findAll(): Promise<{
        orders: import("../orders/dto/order.dto").OrderDTO[] | null;
    }>;
    retrieve(order_hashid: string): Promise<{
        order: import("./dto/OrderSummary").OrderSummary;
    }>;
}
