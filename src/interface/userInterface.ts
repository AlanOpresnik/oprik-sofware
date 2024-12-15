import { Order } from "./orderIterface";

export interface UserDBResponse {
    _id: string;
    name: string;
    email: string;
    password: string;
    plan: any[];
    order: Order; 
    createdAt: Date;
}
