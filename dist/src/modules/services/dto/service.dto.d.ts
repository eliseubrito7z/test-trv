import { Service } from "@prisma/client";
export type ServiceDTO = Omit<Service, "id" | "user_id" | "order_id" | "credential_id"> & {
    order_id: string;
    credential_id: string;
};
