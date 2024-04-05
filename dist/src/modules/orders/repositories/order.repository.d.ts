/// <reference types="stripe/types/crypto/crypto" />
/// <reference types="stripe/types/shared" />
/// <reference types="stripe/types/lib" />
/// <reference types="stripe/types/net/net" />
import Stripe from 'stripe';
import { CreateOrderPrismaDTO, CreateOrderStripeDTO } from '../dto/create-order.dto';
import { OrderDTO } from '../dto/order.dto';
export declare abstract class IOrderPrismaRepository {
    abstract create(data: CreateOrderPrismaDTO): Promise<OrderDTO>;
    abstract findByUser(user_hashid: string): Promise<Array<OrderDTO> | null>;
    abstract findByHashId(order_hashid: string, user_id: number): Promise<OrderDTO | null>;
}
export declare abstract class IOrderStripeRepository {
    abstract create(data: CreateOrderStripeDTO): Promise<Stripe.Checkout.Session>;
}
