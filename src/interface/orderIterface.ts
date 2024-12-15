import { UserDBResponse } from "./userInterface";

export interface OrderDBResponse {
    message: string;
    client:  UserDBResponse;
}



export interface Order {
    _id:                     string;
    client:                  string;
    plan_name:               string;
    estimated_delivery_time: Date;
    price:                   number;
    payment_method:          string;
    payment_status:          string;
    status:                  string;
    createdAt:               Date;
    updatedAt:               Date;
   
}
