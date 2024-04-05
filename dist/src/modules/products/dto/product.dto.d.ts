import { Game, Plataform } from "@prisma/client";
export type ProductDTO = {
    id: string;
    title: string;
    subtitle: string;
    description: string[];
    image_url: string | null;
    price: {
        price_id: string;
        currency: string;
        amount: number;
    };
    game: Game;
    type: string;
    plataform: Plataform;
};
