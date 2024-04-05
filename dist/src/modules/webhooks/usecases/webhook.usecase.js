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
exports.WebhookUseCase = void 0;
const common_1 = require("@nestjs/common");
const webhook_repository_1 = require("../repository/webhook.repository");
const stripe_1 = __importDefault(require("stripe"));
const nestjs_stripe_1 = require("@golevelup/nestjs-stripe");
const product_cache_1 = require("../../../utils/CacheKeys/product.cache");
const cache_manager_1 = require("@nestjs/cache-manager");
let WebhookUseCase = class WebhookUseCase {
    constructor(webhookRepository, stripe, cacheManager) {
        this.webhookRepository = webhookRepository;
        this.stripe = stripe;
        this.cacheManager = cacheManager;
    }
    async execute(e) {
        const { type } = e;
        const object = e.data.object;
        const productObject = e.data.object;
        const typePrefix = type.split('.')[0];
        const declinedTypes = [
            'payment_intent.amount_capturable_updated',
            'payment_intent.created',
            'payment_intent.partially_funded',
        ];
        let session_id;
        if (!declinedTypes.includes(type)) {
            switch (typePrefix) {
                case 'checkout':
                    session_id = object.id;
                    const session_status = object.status.toUpperCase();
                    await this.webhookRepository.checkout(session_id, session_status);
                    break;
                case 'payment_intent':
                    session_id = await this.stripe.checkout.sessions.list({
                        payment_intent: object.id
                    }).then(sessions => sessions.data[0].id);
                    const payment_status = object.status.toUpperCase();
                    await this.webhookRepository.payment_intent(session_id, payment_status);
                    break;
                case 'product':
                    const { quantity, game, type: productType } = productObject.metadata;
                    if (parseInt(quantity) < 1 && productObject.active) {
                        console.log("DISABLING PRODUCT ", productObject.id, quantity);
                        await this.stripe.products.update(productObject.id, {
                            active: false
                        });
                    }
                    const productsCacheKey = (0, product_cache_1.productCacheOfBothCurrencies)(game, productType);
                    for (const cacheKey of productsCacheKey) {
                        await this.cacheManager.del(cacheKey);
                    }
                    break;
                default:
                    console.warn(`Unhandled event type ${type}`);
                    break;
            }
        }
    }
};
exports.WebhookUseCase = WebhookUseCase;
exports.WebhookUseCase = WebhookUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, nestjs_stripe_1.InjectStripeClient)()),
    __param(2, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [webhook_repository_1.WebhookRepository,
        stripe_1.default,
        cache_manager_1.Cache])
], WebhookUseCase);
//# sourceMappingURL=webhook.usecase.js.map