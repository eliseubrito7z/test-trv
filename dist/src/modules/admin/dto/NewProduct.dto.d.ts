import { Game, Plataform, Type } from "@prisma/client";
type Metadata = {
    game: Game;
    plataform: Plataform;
    type: Type;
    item_description_br: string;
    item_description_en: string;
    quantity: number;
};
export type NewProductDTO = {
    name_en: string;
    name_br: string;
    subtitle_en: string;
    subtitle_br: string;
    metadata: Metadata;
    account: {
        email: string;
        password: string;
        nickname: string;
        plataform: Plataform;
        store: string | null;
    } | null;
};
export {};
