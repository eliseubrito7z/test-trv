/// <reference types="stripe/types/crypto/crypto" />
/// <reference types="stripe/types/shared" />
/// <reference types="stripe/types/lib" />
/// <reference types="stripe/types/net/net" />
import Stripe from "stripe";
import { ProductDTO } from "../../dto/product.dto";
import { FindAllFilters, IProductsRepository } from "../products.repository";
import { StripeProductoToDtoMapper } from "../../mapper/stripe-product-to-dto.mapper";
import { PrismaService } from "src/infra/database/prisma.service";
import { Cache } from "@nestjs/cache-manager";
import { ProductBrDTO } from '../../dto/ProductBr.dto';
export declare class ProductStripeRepository implements IProductsRepository {
    private readonly stripe;
    private readonly mapper;
    private readonly prisma;
    private cacheManager;
    constructor(stripe: Stripe, mapper: StripeProductoToDtoMapper, prisma: PrismaService, cacheManager: Cache);
    findAllProducts({ game, type, currency }: FindAllFilters): Promise<ProductDTO[] | null>;
    findProductTranslate(products_ids: string[]): Promise<ProductBrDTO[] | null>;
    findPrices(products_ids_chunks: string[][], currency: string): Promise<Array<[string, Stripe.Price]> | null>;
    retrieveProduct(product_id: string): Promise<ProductDTO>;
    findOrderProducts(order_hashid: string): Promise<ProductDTO[] | null>;
    getAccountCredentials(product_id: string): Promise<{
        email: string;
        password: string;
    }>;
    updateProductQuantity(product_id: string): Promise<void>;
    disableProduct(product_id: string): Promise<void>;
    returnProductsToStock(session_id: string): Promise<void>;
    checkIfTheProductsIsAvailable(products_ids: string[]): Promise<void>;
}
