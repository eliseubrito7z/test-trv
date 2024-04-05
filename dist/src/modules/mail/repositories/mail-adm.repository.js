"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailAdmRepository = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const pug = __importStar(require("pug"));
const path = __importStar(require("path"));
let MailAdmRepository = class MailAdmRepository {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async emailVerification(data) {
        const url = `${process.env.BACK_BASE_URL}/verify-email?token=${data.token}`;
        await this.mailerService.sendMail({
            to: data.email,
            from: '"Support Team" <support@example.com>',
            subject: 'Email verification - TTRVcompany',
            text: `Verify your email going to: ${url}`
        });
    }
    async passwordRecovery(data) {
        const url = `${process.env.FRONT_BASE_URL}/reset/${data.token}`;
        await this.mailerService.sendMail({
            to: data.email,
            from: '"Support Team" <support@example.com>',
            subject: 'Password recovery - TTRVcompany',
            text: `Reset your password going to: ${url}`
        });
    }
    async sendServiceCredentials(data) {
        const credentials = {
            email: data.account_email,
            password: data.account_password,
            nickname: data.account_nickname,
            plataform: data.account_plataform
        };
        if (data.account_store) {
            credentials['store'] = data.account_store;
        }
        const templateFile = path.join(__dirname, '../../../../src/modules/mail/templates/base.pug');
        const templateData = {
            title: "SERVICE ALGUMA COISA"
        };
        const body = pug.renderFile(templateFile, { data: templateData });
        await this.mailerService.sendMail({
            to: data.email,
            from: '"TTRVcompany" <support@ttrvcompany.com>',
            subject: `Service #${data.service_hashid} credentials`,
            text: `${JSON.stringify(credentials)}`,
            html: body
        });
    }
};
exports.MailAdmRepository = MailAdmRepository;
exports.MailAdmRepository = MailAdmRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailAdmRepository);
//# sourceMappingURL=mail-adm.repository.js.map