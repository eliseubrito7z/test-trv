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
exports.ProductCredentialsController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_providers_1 = require("../../infra/providers/guards/auth-guard.providers");
const findOrderAndSend_1 = require("./usecases/findOrderAndSend");
let ProductCredentialsController = class ProductCredentialsController {
    constructor(findOrderAndSendUseCase) {
        this.findOrderAndSendUseCase = findOrderAndSendUseCase;
    }
    async sendToBuyer(order_id) {
        await this.findOrderAndSendUseCase.execute(order_id);
    }
};
exports.ProductCredentialsController = ProductCredentialsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_providers_1.AuthGuard),
    __param(0, (0, common_1.Query)('order_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductCredentialsController.prototype, "sendToBuyer", null);
exports.ProductCredentialsController = ProductCredentialsController = __decorate([
    (0, common_1.Controller)('/admin/product-credentials'),
    __metadata("design:paramtypes", [findOrderAndSend_1.FindOrderAndSendUseCase])
], ProductCredentialsController);
//# sourceMappingURL=productCredentialsController.js.map