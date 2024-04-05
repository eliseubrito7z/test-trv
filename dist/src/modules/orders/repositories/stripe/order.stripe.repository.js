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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStripeRepository = void 0;
const common_1 = require("@nestjs/common");
const nestjs_stripe_1 = require("@golevelup/nestjs-stripe");
const stripe_1 = __importDefault(require("stripe"));
let OrderStripeRepository = class OrderStripeRepository {
    constructor(stripe) {
        this.stripe = stripe;
    }
    async create(data) {
        const session = await this.stripe.checkout.sessions.create({
            success_url: "http://localhost:5173/my-orders",
            line_items: data.line_items,
            mode: 'payment',
            currency: data.currency,
            customer_email: data.customer_email,
        });
        return session;
    }
};
exports.OrderStripeRepository = OrderStripeRepository;
exports.OrderStripeRepository = OrderStripeRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_stripe_1.InjectStripeClient)()),
    __metadata("design:paramtypes", [stripe_1.default])
], OrderStripeRepository);
//# sourceMappingURL=order.stripe.repository.js.map