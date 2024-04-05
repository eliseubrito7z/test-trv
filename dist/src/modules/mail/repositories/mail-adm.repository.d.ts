import { IMailRepositoryAdm } from "./mail.repository";
import { MailerService } from "@nestjs-modules/mailer";
import { TEmailVerification } from "../schema/common/emailVerification.schema";
import { TPasswordRecovery } from "../schema/common/passwordRecovery";
import { TSendServiceCredentials } from "../schema/adm/sendServiceCredentials";
export declare class MailAdmRepository implements IMailRepositoryAdm {
    private mailerService;
    constructor(mailerService: MailerService);
    emailVerification(data: TEmailVerification): Promise<void>;
    passwordRecovery(data: TPasswordRecovery): Promise<void>;
    sendServiceCredentials(data: TSendServiceCredentials): Promise<void>;
}
