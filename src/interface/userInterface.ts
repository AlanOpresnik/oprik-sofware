import { Order } from "./orderIterface";

export interface UserDBResponse {
    _id: string;
    name: string;
    email: string;
    password: string;
    plan: string[];
    order: Order; 
    createdAt: Date;
}
