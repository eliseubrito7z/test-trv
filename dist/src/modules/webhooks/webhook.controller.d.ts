import { Request } from "express";
import { WebhookUseCase } from "./usecases/webhook.usecase";
export declare class WebhookController {
    private readonly webhookUseCase;
    constructor(webhookUseCase: WebhookUseCase);
    execute(req: Request): Promise<void>;
}
