import { Locales, User } from '@prisma/client';
export type CreateUserDTO = {
    fullname: string;
    email: string;
    password: string;
    locale: Locales;
};
export type UserDTO = Omit<User, 'id' | "created_at">;
