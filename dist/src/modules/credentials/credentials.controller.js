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
exports.CredentialsController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_providers_1 = require("../../infra/providers/guards/auth-guard.providers");
const credentials_repository_1 = require("./repositories/credentials.repository");
const create_credential_schema_1 = require("./schemas/create-credential.schema");
const create_credential_usecase_1 = require("./usecases/create-credential.usecase");
const hashid_service_1 = require("../../infra/database/hashid.service");
const cache_manager_1 = require("@nestjs/cache-manager");
const credentials_cache_1 = require("../../utils/CacheKeys/credentials.cache");
let CredentialsController = class CredentialsController {
    constructor(createCredentialUseCase, credentialsRepository, hashid, cacheManager) {
        this.createCredentialUseCase = createCredentialUseCase;
        this.credentialsRepository = credentialsRepository;
        this.hashid = hashid;
        this.cacheManager = cacheManager;
    }
    async getUserCredentials(req) {
        const user_hashid = req.user.sub;
        const CACHE_KEY = (0, credentials_cache_1.getUserCredentialsCacheKey)(user_hashid);
        const cacheData = await this.cacheManager.get(CACHE_KEY);
        if (cacheData) {
            return { credentials: cacheData };
        }
        const credentials = await this.credentialsRepository.findUserCredentials(user_hashid) ?? [];
        await this.cacheManager.set(CACHE_KEY, credentials, 1000 * 60 * 10);
        return { credentials };
    }
    async create(data, req) {
        const user_hashid = req.user.sub;
        const { confirm_email, confirm_password, ...createData } = data;
        const credential = await this.createCredentialUseCase.save({
            ...createData,
            store: data.store ?? null,
            observations: data.observations ?? null,
        }, user_hashid);
        const CACHE_KEY = (0, credentials_cache_1.getUserCredentialsCacheKey)(user_hashid);
        await this.cacheManager.del(CACHE_KEY);
        return { credential };
    }
    async disableUserCredential(credential_hashid, req) {
        const user_hashid = req.user.sub;
        await this.credentialsRepository.disableCredential(credential_hashid, user_hashid);
        const CACHE_KEY = (0, credentials_cache_1.getUserCredentialsCacheKey)(user_hashid);
        await this.cacheManager.del(CACHE_KEY);
    }
    async findCredentialById(credential_hashid, req) {
        const user_hashid = req.user.sub;
        const { id: user_id } = this.hashid.decode(user_hashid);
        const credential = await this.credentialsRepository.findCredentialById(credential_hashid, user_id);
        return { credential };
    }
};
exports.CredentialsController = CredentialsController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(auth_guard_providers_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "getUserCredentials", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_providers_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_credential_schema_1.CreateCredentialSchemaDTO, Object]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/disable'),
    (0, common_1.UseGuards)(auth_guard_providers_1.AuthGuard),
    __param(0, (0, common_1.Query)('credential_id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "disableUserCredential", null);
__decorate([
    (0, common_1.Get)('/retrieve'),
    (0, common_1.UseGuards)(auth_guard_providers_1.AuthGuard),
    __param(0, (0, common_1.Query)('credential_id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CredentialsController.prototype, "findCredentialById", null);
exports.CredentialsController = CredentialsController = __decorate([
    (0, common_1.Controller)('/credentials'),
    __param(3, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [create_credential_usecase_1.CreateCredentialUseCase,
        credentials_repository_1.ICredentialsRepository,
        hashid_service_1.HashId,
        cache_manager_1.Cache])
], CredentialsController);
//# sourceMappingURL=credentials.controller.js.map