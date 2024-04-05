import { IServicesRepository } from './repositories/services.repository';
import { ProvideCredentialSchemaDTO } from './schemas/provide-credential.schema';
import { Cache } from '@nestjs/cache-manager';
export declare class ServicesController {
    private readonly serviceRepository;
    private cacheManager;
    constructor(serviceRepository: IServicesRepository, cacheManager: Cache);
    findNotWaitingServices(order_hashid: string): Promise<{
        services: {};
    }>;
    provideCredential(data: ProvideCredentialSchemaDTO): Promise<{
        service: import("./dto/service.dto").ServiceDTO;
    }>;
}
