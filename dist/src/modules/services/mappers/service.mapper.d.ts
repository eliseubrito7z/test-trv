import { ServiceDTO } from "../dto/service.dto";
import { Service } from "@prisma/client";
type ServiceWithOrder = Service & {
    order: {
        external_id: string | null;
    };
    credential: {
        external_id: string | null;
    } | null;
};
export declare class ServiceMapper {
    prismaServiceToDto(data: ServiceWithOrder): ServiceDTO;
}
export {};
