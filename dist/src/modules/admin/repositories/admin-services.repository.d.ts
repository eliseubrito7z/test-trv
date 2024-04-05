import { IAdminServicesRepository } from "./admin.repository";
import { PrismaService } from "src/infra/database/prisma.service";
import { ServiceDTO } from "src/modules/services/dto/service.dto";
import { ServiceMapper } from "src/modules/services/mappers/service.mapper";
export declare class AdminServicesRepository implements IAdminServicesRepository {
    private readonly prisma;
    private readonly mapper;
    constructor(prisma: PrismaService, mapper: ServiceMapper);
    findAll(): Promise<ServiceDTO[] | null>;
    completeService(service_hashid: string): Promise<ServiceDTO>;
}
