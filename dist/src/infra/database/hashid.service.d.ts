import { Prisma } from "@prisma/client";
export declare class HashId {
    private readonly alphabet;
    private sqids;
    decode(data: string): {
        id: number;
    };
    encode(model: Prisma.ModelName, id: number): string;
}
