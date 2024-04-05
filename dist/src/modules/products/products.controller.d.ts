import { FindAllFilters, IProductsRepository } from './repositories/products.repository';
import { FindProductsUseCase } from './usecases/find-products.usecase';
import { Cache } from '@nestjs/cache-manager';
export declare class ProductsController {
    private readonly findProductsUseCase;
    private readonly repository;
    private cacheManager;
    constructor(findProductsUseCase: FindProductsUseCase, repository: IProductsRepository, cacheManager: Cache);
    findAll(game: FindAllFilters['game'], type: FindAllFilters['type'], currency: FindAllFilters['currency']): Promise<{
        products: {};
    }>;
    findOrderProducts(order_hashid: string): Promise<{
        products: {};
    } | {
        products: import("./dto/product.dto").ProductDTO[] | null;
    }>;
    getAccountCredentials(product_id: string): Promise<{
        credentials: import("./dto/accountProduct.dto").AccountProductDTO;
    }>;
}
