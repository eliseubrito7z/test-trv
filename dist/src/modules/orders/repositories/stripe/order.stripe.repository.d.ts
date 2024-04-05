/// <reference types="stripe/types/crypto/crypto" />
/// <reference types="stripe/types/shared" />
/// <reference types="stripe/types/lib" />
/// <reference types="stripe/types/net/net" />
import { IOrderStripeRepository } from "../order.repository";
import Stripe from "stripe";
import { CreateOrderStripeDTO } from "../../dto/create-order.dto";
export declare class OrderStripeRepository implements IOrderStripeRepository {
    private stripe;
    constructor(stripe: Stripe);
    create(data: CreateOrderStripeDTO): Promise<Stripe.Checkout.Session>;
}
