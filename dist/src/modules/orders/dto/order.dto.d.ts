import { Credential, Order, Service } from '@prisma/client';
export type OrderDTO = Omit<Order, 'user_id' | 'id'>;
type ServiceWithCredentials = Service & {
    credential: Omit<Credential, 'id' | 'user_id' | 'password'>;
};
export type OrderWithServicesDTO = OrderDTO & {
    services: Array<ServiceWithCredentials> | null;
};
export {};
