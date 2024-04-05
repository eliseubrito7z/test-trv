import { Service } from "@prisma/client";
export type ServiceUserEidCredentialEid = Service & {
    credential: {
        external_id: string;
    } | null;
    user: {
        external_id: string;
    };
};
