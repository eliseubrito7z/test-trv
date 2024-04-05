import { ServiceDTO } from '../dto/service.dto';
import { ProvideCredentialDTO } from '../schemas/provide-credential.schema';
export declare abstract class IServicesRepository {
    abstract findNotWaitingServices(order_hashid: string): Promise<Array<ServiceDTO> | null>;
    abstract provideCredential(data: ProvideCredentialDTO): Promise<ServiceDTO>;
}
