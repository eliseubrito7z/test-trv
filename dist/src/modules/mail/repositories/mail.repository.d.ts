import { TSendAccountCredentials } from "../schema/client/sendAccountCredentials";
import { TEmailVerification } from "../schema/common/emailVerification.schema";
import { TPasswordRecovery } from "../schema/common/passwordRecovery";
import { TPaymentPendingUserAction } from "../schema/client/paymentPendingUserAction";
import { TPaymentCompleted } from "../schema/client/paymentCompleted.schema";
import { TSendServiceCredentials } from "../schema/adm/sendServiceCredentials";
export declare abstract class IMailRepositoryClient {
    abstract emailVerification(data: TEmailVerification): Promise<void>;
    abstract passwordRecovery(data: TPasswordRecovery): Promise<void>;
    abstract paymentPendingUserAction(data: TPaymentPendingUserAction): Promise<void>;
    abstract paymentCompleted(data: TPaymentCompleted): Promise<void>;
    abstract sendAccountCredentials(data: TSendAccountCredentials): Promise<void>;
}
export declare abstract class IMailRepositoryAdm {
    abstract emailVerification(data: TEmailVerification): Promise<void>;
    abstract passwordRecovery(data: TPasswordRecovery): Promise<void>;
    abstract sendServiceCredentials(data: TSendServiceCredentials): Promise<void>;
}
