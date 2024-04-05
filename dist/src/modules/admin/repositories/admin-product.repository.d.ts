/// <reference types="stripe/types/crypto/crypto" />
/// <reference types="stripe/types/shared" />
/// <reference types="stripe/types/lib" />
/// <reference types="stripe/types/net/net" />
import Stripe from "stripe";
import { IAdminProductsRepository } from "./admin.repository";
import { NewProductDTO } from "../dto/NewProduct.dto";
import { NewPriceDTO } from "../dto/NewPrice.dto";
import { PrismaService } from "src/infra/database/prisma.service";
import { ProductCredentialsDTO } from "../dto/ProductCredentials.dto";
export declare class AdminProductRepository implements IAdminProductsRepository {
    private readonly stripe;
    private readonly prisma;
    constructor(stripe: Stripe, prisma: PrismaService);
    createProduct(data: NewProductDTO): Promise<Stripe.Product>;
    createPrice(data: NewPriceDTO): Promise<void>;
    retrieveProduct(product_id: string): Promise<Stripe.Response<Stripe.Product>>;
    createProductCredentials({ password, ...rest }: ProductCredentialsDTO): Promise<void>;
}
