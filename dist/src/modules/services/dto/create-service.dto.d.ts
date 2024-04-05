import { Game, Plataform, Type } from "@prisma/client";
export type CreateServiceDTO = {
    game: Game;
    type: Type;
    plataform: Plataform;
    user_hashid: string;
    order_hashid: string;
    quantity: number;
    product_id: string;
};
