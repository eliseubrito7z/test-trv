import { Service } from "@prisma/client";
import { Omit } from "@prisma/client/runtime/library";
import { OrderDTO } from "src/modules/orders/dto/order.dto";
export type AdminServiceDTO = Omit<Service, 'id' | 'order_id' | 'user_id' | 'credential_id'> & {
    user_id: string;
    credential_id: string | null;
};
export type OrderSummary = OrderDTO & {
    services: AdminServiceDTO[];
};
