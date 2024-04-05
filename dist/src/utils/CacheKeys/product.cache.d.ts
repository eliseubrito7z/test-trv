import { Game, Type } from "@prisma/client";
export declare function findAllProductsCacheKey(game: Game, type: Type, currency: string): string;
export declare function retrieveProductCacheKey(product_id: string): string;
export declare function findOrderProductsCacheKey(order_id: string): string;
export declare function productCacheOfBothCurrencies(game: Game, type: Type): string[];
