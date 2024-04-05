import { IOrderPrismaRepository } from "../repositories/order.repository";
export declare class FindOrderUseCase {
    private readonly orderPrismaRepository;
    constructor(orderPrismaRepository: IOrderPrismaRepository);
    findByUser(user_hashid: string): Promise<import("../dto/order.dto").OrderDTO[] | null>;
    findByHashId(order_hashid: string, user_id: number): Promise<import("../dto/order.dto").OrderDTO | null>;
}
