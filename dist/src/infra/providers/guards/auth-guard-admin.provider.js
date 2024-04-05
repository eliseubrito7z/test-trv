"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const admin_repository_1 = require("../../../modules/admin/repositories/admin.repository");
let AdminAuthGuard = class AdminAuthGuard {
    constructor(jwtService, authAdminRepository) {
        this.jwtService = jwtService;
        this.authAdminRepository = authAdminRepository;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(req);
        if (!token) {
            throw new common_1.UnauthorizedException('No access token provided.');
        }
        try {
            const payload = await this.jwtService.verify(token, {
                secret: process.env.PRIVATE_KEY
            });
            const admin = await this.authAdminRepository.findByExternalId(payload.sub);
            if (!admin) {
                throw new common_1.UnauthorizedException('Admin user not found.');
            }
            req['user'] = payload;
        }
        catch {
            throw new common_1.UnauthorizedException("Token verification error");
        }
        return true;
    }
    extractTokenFromHeader(req) {
        const [type, token] = req.headers.authorization?.split(" ") ?? [];
        return type == 'Bearer' ? token : undefined;
    }
};
exports.AdminAuthGuard = AdminAuthGuard;
exports.AdminAuthGuard = AdminAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        admin_repository_1.IAuthAdminRepository])
], AdminAuthGuard);
//# sourceMappingURL=auth-guard-admin.provider.js.map