import { FindAllFilters, IProductsRepository } from "../repositories/products.repository";
export declare class FindProductsUseCase {
    private readonly productRepository;
    constructor(productRepository: IProductsRepository);
    findAll(filters: FindAllFilters): Promise<import("../dto/product.dto").ProductDTO[] | null>;
    retrieveProduct(product_id: string): Promise<import("../dto/product.dto").ProductDTO>;
    findOrderProducts(order_hashid: string): Promise<import("../dto/product.dto").ProductDTO[] | null>;
}
