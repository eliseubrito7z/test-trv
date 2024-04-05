import { Request } from "express";
export type JwtUser = {
    sub: string;
    name: string;
};
export interface IAuthGuard extends Request {
    user: JwtUser;
}
