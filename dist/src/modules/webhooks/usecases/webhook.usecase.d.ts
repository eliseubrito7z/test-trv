/// <reference types="stripe/types/crypto/crypto" />
/// <reference types="stripe/types/shared" />
/// <reference types="stripe/types/lib" />
/// <reference types="stripe/types/net/net" />
import { WebhookRepository } from "../repository/webhook.repository";
import Stripe from "stripe";
import { Cache } from "@nestjs/cache-manager";
export declare class WebhookUseCase {
    private readonly webhookRepository;
    private readonly stripe;
    private cacheManager;
    constructor(webhookRepository: WebhookRepository, stripe: Stripe, cacheManager: Cache);
    execute(e: Stripe.Event): Promise<void>;
}
