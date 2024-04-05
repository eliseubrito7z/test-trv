import { GoogleLoginUseCase } from './useCases/googleLogin.usecase';
import { Request, Response } from 'express';
export declare class GoogleController {
    private readonly googleLoginUseCase;
    constructor(googleLoginUseCase: GoogleLoginUseCase);
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: Request, res: Response): Promise<void>;
}
