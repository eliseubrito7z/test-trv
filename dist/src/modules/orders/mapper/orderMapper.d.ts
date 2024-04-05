import { Order } from "@prisma/client";
import { OrderDTO } from "../dto/order.dto";
export declare class OrderMapper {
    orderToOrderDTO(order: Order): OrderDTO;
}
