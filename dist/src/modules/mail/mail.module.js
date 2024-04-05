"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const mail_repository_1 = require("./repositories/mail.repository");
const mail_client_repository_1 = require("./repositories/mail-client.repository");
const mail_adm_repository_1 = require("./repositories/mail-adm.repository");
let MailModule = class MailModule {
};
exports.MailModule = MailModule;
exports.MailModule = MailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'britoseliseu23@gmail.com',
                        pass: 'coie hyeq spmw oemz ',
                    },
                },
                defaults: {
                    from: '"No Reply" <noreply@example.com>',
                },
            }),
        ],
        providers: [{
                provide: mail_repository_1.IMailRepositoryClient,
                useClass: mail_client_repository_1.MailClientRepository
            }, {
                provide: mail_repository_1.IMailRepositoryAdm,
                useClass: mail_adm_repository_1.MailAdmRepository
            }],
        exports: [{
                provide: mail_repository_1.IMailRepositoryClient,
                useClass: mail_client_repository_1.MailClientRepository
            }, {
                provide: mail_repository_1.IMailRepositoryAdm,
                useClass: mail_adm_repository_1.MailAdmRepository
            }],
    })
], MailModule);
//# sourceMappingURL=mail.module.js.map