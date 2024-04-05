/// <reference types="stripe/types/crypto/crypto" />
/// <reference types="stripe/types/shared" />
/// <reference types="stripe/types/lib" />
/// <reference types="stripe/types/net/net" />
import { OrderDTO } from "src/modules/orders/dto/order.dto";
import { FindAllOrdersFilter } from "../filters/orders.filters";
import { ServiceDTO } from "src/modules/services/dto/service.dto";
import { AccessCredentials } from "../dto/AccessCredentials";
import { TSendCredential } from "../schemas/sendCredentialToAdmin.schema";
import { OrderSummary } from "../dto/OrderSummary";
import Stripe from "stripe";
import { NewPriceDTO } from "../dto/NewPrice.dto";
import { NewProductDTO } from "../dto/NewProduct.dto";
import { ProductCredentialsDTO } from "../dto/ProductCredentials.dto";
import { CreateAdminDTO } from "../dto/CreateAdmin.dto";
import { AdminUserDTO } from "../dto/AdminUser.dto";
export declare abstract class IAuthAdminRepository {
    abstract findByEmail(email: string): Promise<AdminUserDTO | null>;
    abstract findByExternalId(external_id: string): Promise<AdminUserDTO | null>;
    abstract registerNewAdminUser(data: CreateAdminDTO): Promise<AdminUserDTO>;
}
export declare abstract class IAdminOrdersRepository {
    abstract findAll(filters: FindAllOrdersFilter): Promise<OrderDTO[] | null>;
    abstract retrieve(order_hashid: string): Promise<OrderSummary>;
}
export declare abstract class IAdminServicesRepository {
    abstract findAll(): Promise<ServiceDTO[] | null>;
    abstract completeService(service_hashid: string): Promise<ServiceDTO>;
}
export declare abstract class IAdminCredentialsRepository {
    abstract sendCredentialToAdmin(data: TSendCredential): Promise<AccessCredentials>;
}
export declare abstract class IAdminProductsRepository {
    abstract createProduct(data: NewProductDTO): Promise<Stripe.Product>;
    abstract createProductCredentials(data: ProductCredentialsDTO): Promise<void>;
    abstract createPrice(data: NewPriceDTO): Promise<void>;
    abstract retrieveProduct(product_id: string): Promise<Stripe.Product>;
}
