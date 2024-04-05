import { PrismaService } from 'src/infra/database/prisma.service';
import { ServiceDTO } from '../dto/service.dto';
import { ServiceMapper } from '../mappers/service.mapper';
import { IServicesRepository } from './services.repository';
import { ProvideCredentialDTO } from '../schemas/provide-credential.schema';
export declare class ServicesPrismaRepository implements IServicesRepository {
    private readonly prisma;
    private readonly mapper;
    constructor(prisma: PrismaService, mapper: ServiceMapper);
    findNotWaitingServices(order_hashid: string): Promise<ServiceDTO[] | null>;
    provideCredential(data: ProvideCredentialDTO): Promise<ServiceDTO>;
}
