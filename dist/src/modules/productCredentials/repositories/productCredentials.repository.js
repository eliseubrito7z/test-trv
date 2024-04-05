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
exports.ProductCredentialsRepository = void 0;
const nestjs_stripe_1 = require("@golevelup/nestjs-stripe");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../infra/database/prisma.service");
const mail_repository_1 = require("../../mail/repositories/mail.repository");
const credentialsCrypt_1 = require("../../../utils/credentialsCrypt");
const stripe_1 = __importDefault(require("stripe"));
let ProductCredentialsRepository = class ProductCredentialsRepository {
    constructor(stripe, prisma, mailRepository) {
        this.stripe = stripe;
        this.prisma = prisma;
        this.mailRepository = mailRepository;
    }
    async sendToBuyer(order) {
        const { data: line_items } = await this.stripe.checkout.sessions.listLineItems(order.session_id);
        const product_ids = line_items.map((item) => item.price.product);
        const product_credentials = await this.prisma.productCredentials.findMany({
            where: {
                product_id: { in: product_ids }
            }
        });
        if (product_credentials.length == 0) {
            return;
        }
        const accounts = [];
        for (const credential of product_credentials) {
            const pw = await (0, credentialsCrypt_1.decrypt)(credential.password);
            console.log("DECRYPTED PW ", credential.nickname, pw);
            accounts.push({
                product_id: credential.product_id,
                account_email: credential.email,
                account_password: await (0, credentialsCrypt_1.decrypt)(credential.password),
                account_nickname: credential.nickname,
                account_plataform: credential.plataform,
                account_store: credential.store
            });
        }
        this.mailRepository.sendAccountCredentials({
            email: order.user.email,
            locale: order.user.locale ?? 'EN',
            order_hashid: order.external_id,
            accounts,
            customer_name: order.user.fullname.split(' ')[0]
        });
    }
};
exports.ProductCredentialsRepository = ProductCredentialsRepository;
exports.ProductCredentialsRepository = ProductCredentialsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_stripe_1.InjectStripeClient)()),
    __metadata("design:paramtypes", [stripe_1.default,
        prisma_service_1.PrismaService,
        mail_repository_1.IMailRepositoryClient])
], ProductCredentialsRepository);
//# sourceMappingURL=productCredentials.repository.js.map