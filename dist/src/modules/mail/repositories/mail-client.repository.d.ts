import { IMailRepositoryClient } from "./mail.repository";
import { MailerService } from "@nestjs-modules/mailer";
import { TEmailVerification } from "../schema/common/emailVerification.schema";
import { TPasswordRecovery } from "../schema/common/passwordRecovery";
import { TPaymentPendingUserAction } from "../schema/client/paymentPendingUserAction";
import { TPaymentCompleted } from "../schema/client/paymentCompleted.schema";
import { TSendAccountCredentials } from "../schema/client/sendAccountCredentials";
export declare class MailClientRepository implements IMailRepositoryClient {
    private mailerService;
    constructor(mailerService: MailerService);
    emailVerification(data: TEmailVerification): Promise<void>;
    passwordRecovery(data: TPasswordRecovery): Promise<void>;
    paymentPendingUserAction(data: TPaymentPendingUserAction): Promise<void>;
    paymentCompleted(data: TPaymentCompleted): Promise<void>;
    sendAccountCredentials(data: TSendAccountCredentials): Promise<void>;
}
