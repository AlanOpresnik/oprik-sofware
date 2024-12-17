import { UserDBResponse } from "./userInterface";

export interface OrderDBResponse {
    message: string;
    client:  UserDBResponse;
}



export interface Order {
    client:                  string;
    plan_name:               string;
    estimated_delivery_time: string;
    price:                   number;
    payment_method:          string;
    payment_status:          string;
    status:                  string;
    dev_info:                DevInfo;
    _id:                     string;
    createdAt:               Date;
    updatedAt:               Date;
    __v:                     number;
}

export interface DevInfo {
    messages:      Message[];
    name_dev:      string;
    phone_dev:     string;
    delivery_time: string;
    web_preview:   string;
}

export interface Message {
    dev:       string;
    message:   string;
    recived:   boolean;
    _id:       string;
    createdAt: Date;
}
