"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCredentialMapper = void 0;
const common_1 = require("@nestjs/common");
let AdminCredentialMapper = class AdminCredentialMapper {
    prismaCredentialToAccessCredentials(credential) {
        const { id, active, user_id, ...rest } = credential;
        const mapped_credential = rest;
        return mapped_credential;
    }
};
exports.AdminCredentialMapper = AdminCredentialMapper;
exports.AdminCredentialMapper = AdminCredentialMapper = __decorate([
    (0, common_1.Injectable)()
], AdminCredentialMapper);
//# sourceMappingURL=credential.mapper.js.map