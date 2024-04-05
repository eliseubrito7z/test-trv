import { AdminServiceDTO } from "../dto/OrderSummary";
import { ServiceUserEidCredentialEid } from "../dto/AdminService.dto";
export declare class AdminServiceMapper {
    prismaServiceToAdminServiceDTO(service: ServiceUserEidCredentialEid): AdminServiceDTO;
}
