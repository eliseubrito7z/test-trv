import { IAdminServicesRepository } from "./repositories/admin.repository";
export declare class AdminServicesController {
    private readonly servicesRepository;
    constructor(servicesRepository: IAdminServicesRepository);
    findAll(): Promise<{
        services: import("../services/dto/service.dto").ServiceDTO[] | null;
    }>;
    completeService(service_hashid: string): Promise<{
        service: import("../services/dto/service.dto").ServiceDTO;
    }>;
}
