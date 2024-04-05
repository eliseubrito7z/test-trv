/// <reference types="stripe/types/crypto/crypto" />
/// <reference types="stripe/types/shared" />
/// <reference types="stripe/types/lib" />
/// <reference types="stripe/types/net/net" />
import Stripe from "stripe";
import { AccountProductDTO } from "../dto/accountProduct.dto";
import { ProductDTO } from "../dto/product.dto";
import { Game, Type } from "@prisma/client";
import { ProductBrDTO } from "../dto/ProductBr.dto";
export type FindAllFilters = {
    game: Game;
    type: Type;
    currency: "brl" | "usd";
};
export type UpdateProductProps = {
    product_id: string;
    quantity: number;
};
export declare abstract class IProductsRepository {
    abstract findAllProducts({ game, type, currency }: FindAllFilters): Promise<Array<ProductDTO> | null>;
    abstract findProductTranslate(products_ids: string[]): Promise<Array<ProductBrDTO> | null>;
    abstract findPrices(products_ids_chunks: string[][], currency: string): Promise<Array<[string, Stripe.Price]> | null>;
    abstract retrieveProduct(product_id: string): Promise<ProductDTO>;
    abstract disableProduct(product_id: string): Promise<void>;
    abstract updateProductQuantity(product_id: string): Promise<void>;
    abstract returnProductsToStock(session_id: string): Promise<void>;
    abstract checkIfTheProductsIsAvailable(products_ids: string[]): Promise<void>;
    abstract findOrderProducts(order_hashid: string): Promise<Array<ProductDTO> | null>;
    abstract getAccountCredentials(product_id: string): Promise<AccountProductDTO>;
}
