import { Game, Order, Plataform, Type } from '@prisma/client';
import { CreateServiceDTO } from 'src/modules/services/dto/create-service.dto';
export type CreateOrderStripeDTO = {
    customer_email: string;
    line_items: {
        price: string;
    }[];
    currency: string;
};
type OmitProps = 'id' | 'user_id' | 'order_num' | 'session_status' | 'payment_status' | 'status' | 'credentials_provided' | 'external_id';
export type CreateServiceInOrderDTO = Omit<CreateServiceDTO, "quantity" | 'order_hashid' | "user_hashid"> & {
    user_id: number;
};
export type CreateOrderPrismaDTO = Omit<Order, OmitProps> & {
    session_url: string;
    user_id: number;
    services: CreateServiceInOrderDTO[];
};
export type CreateOrderDTO = {
    external_id: string;
    products: {
        type: Type;
        plataform: Plataform;
        game: Game;
        product_id: string;
        price_id: string;
    }[];
    currency: string;
};
export {};
