import { FindOrderAndSendUseCase } from "./usecases/findOrderAndSend";
export declare class ProductCredentialsController {
    private readonly findOrderAndSendUseCase;
    constructor(findOrderAndSendUseCase: FindOrderAndSendUseCase);
    sendToBuyer(order_id: string): Promise<void>;
}
