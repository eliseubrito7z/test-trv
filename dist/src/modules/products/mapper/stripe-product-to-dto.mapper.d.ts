/// <reference types="stripe/types/crypto/crypto" />
/// <reference types="stripe/types/shared" />
/// <reference types="stripe/types/lib" />
/// <reference types="stripe/types/net/net" />
import Stripe from "stripe";
import { ProductDTO } from "../dto/product.dto";
import { ProductBrDTO } from "../dto/ProductBr.dto";
export declare class StripeProductoToDtoMapper {
    fromStripeToProductDto(product: Stripe.Product, price: Stripe.Price): ProductDTO;
    fromDBtoProductDto(product: ProductBrDTO & {
        imageUrl: string | null;
    }, price: Stripe.Price): ProductDTO;
    fromStripeToPurchasedProductDto(line_item: Stripe.LineItem): ProductDTO;
}
