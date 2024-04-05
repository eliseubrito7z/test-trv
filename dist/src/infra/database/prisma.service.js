"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const hashid_service_1 = require("./hashid.service");
const prisma_nested_middleware_1 = require("prisma-nested-middleware");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        const hashIds = new hashid_service_1.HashId();
        await this.$connect();
        const nonExternalIdRequires = [
            client_1.Prisma.ModelName.ProductTranslate,
            client_1.Prisma.ModelName.ProductCredentials
        ];
        this.$use((0, prisma_nested_middleware_1.createNestedMiddleware)(async (params, next) => {
            if (params.action === 'create' && !nonExternalIdRequires.includes(params.model)) {
                let new_id = await this[params.model].count() + 1;
                const external_id = hashIds.encode(params.model, new_id);
                params.args.data.external_id = external_id;
            }
            if (params.action === 'createMany') {
                const first_id = await this[params.model].count() + 1;
                const quantity = params.args.data.length;
                let curr_id = first_id;
                let i = 0;
                for (i; i < quantity; i++, curr_id++) {
                    const external_id = hashIds.encode(params.model, curr_id);
                    params.args.data[i].external_id = external_id;
                }
            }
            return next(params);
        }));
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);
//# sourceMappingURL=prisma.service.js.map