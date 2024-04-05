import { Plataform } from "@prisma/client";
export type ProductCredentialsDTO = {
    product_id: string;
    email: string;
    password: string;
    nickname: string;
    plataform: Plataform;
    store: string | null;
};
