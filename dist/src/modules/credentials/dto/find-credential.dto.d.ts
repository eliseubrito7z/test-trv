import { $Enums } from "@prisma/client";
export type FindExistingCredentialDTO = {
    game: $Enums.Game;
    plataform: $Enums.Plataform;
    email: string;
};
