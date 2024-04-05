import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { IAuthAdminRepository } from "src/modules/admin/repositories/admin.repository";
export declare class AdminAuthGuard implements CanActivate {
    private jwtService;
    private readonly authAdminRepository;
    constructor(jwtService: JwtService, authAdminRepository: IAuthAdminRepository);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
