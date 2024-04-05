"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminServiceMapper = void 0;
const common_1 = require("@nestjs/common");
let AdminServiceMapper = class AdminServiceMapper {
    prismaServiceToAdminServiceDTO(service) {
        const { id, user_id, credential_id, order_id, user, credential, ...rest } = service;
        const mapped_service = {
            ...rest,
            user_id: user.external_id,
            credential_id: credential?.external_id ?? null
        };
        return mapped_service;
    }
};
exports.AdminServiceMapper = AdminServiceMapper;
exports.AdminServiceMapper = AdminServiceMapper = __decorate([
    (0, common_1.Injectable)()
], AdminServiceMapper);
//# sourceMappingURL=service.mapper.js.map