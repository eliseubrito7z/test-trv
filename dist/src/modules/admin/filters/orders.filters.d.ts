import { OrderStatus, PaymentStatus, SessionStatus } from "@prisma/client";
export type FindAllOrdersFilter = {
    status?: OrderStatus;
    session_status?: SessionStatus;
    payment_status?: PaymentStatus;
    user_id?: string;
};
