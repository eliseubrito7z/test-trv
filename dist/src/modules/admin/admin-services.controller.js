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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminServicesController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_admin_provider_1 = require("../../infra/providers/guards/auth-guard-admin.provider");
const admin_repository_1 = require("./repositories/admin.repository");
let AdminServicesController = class AdminServicesController {
    constructor(servicesRepository) {
        this.servicesRepository = servicesRepository;
    }
    async findAll() {
        const services = await this.servicesRepository.findAll();
        return { services };
    }
    async completeService(service_hashid) {
        const service = await this.servicesRepository.completeService(service_hashid);
        return { service };
    }
};
exports.AdminServicesController = AdminServicesController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_admin_provider_1.AdminAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminServicesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(),
    (0, common_1.UseGuards)(auth_guard_admin_provider_1.AdminAuthGuard),
    __param(0, (0, common_1.Query)('service_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminServicesController.prototype, "completeService", null);
exports.AdminServicesController = AdminServicesController = __decorate([
    (0, common_1.Controller)('/admin/services'),
    __metadata("design:paramtypes", [admin_repository_1.IAdminServicesRepository])
], AdminServicesController);
//# sourceMappingURL=admin-services.controller.js.map