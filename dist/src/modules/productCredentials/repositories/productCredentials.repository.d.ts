/// <reference types="stripe/types/crypto/crypto" />
/// <reference types="stripe/types/shared" />
/// <reference types="stripe/types/lib" />
/// <reference types="stripe/types/net/net" />
import { Locales, Order } from "@prisma/client";
import { PrismaService } from "src/infra/database/prisma.service";
import { IMailRepositoryClient } from "src/modules/mail/repositories/mail.repository";
import Stripe from "stripe";
export declare class ProductCredentialsRepository {
    private stripe;
    private readonly prisma;
    private readonly mailRepository;
    constructor(stripe: Stripe, prisma: PrismaService, mailRepository: IMailRepositoryClient);
    sendToBuyer(order: Order & {
        user: {
            email: string;
            locale: Locales | null;
            fullname: string;
        };
    }): Promise<void>;
}
