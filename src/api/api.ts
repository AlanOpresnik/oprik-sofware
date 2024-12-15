import { Order, OrderDBResponse } from "@/interface/orderIterface";
import { UserDBResponse } from "@/interface/userInterface";
import axios from "axios";


const login = async (email: string, password: string) => {
    try {
        const response = await fetch(`${process.env.DATABASE_URL}clients/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error(`Request failed. Status: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Error en login:', error);
        throw error;
    }
};

const getUserByEmail = async (email: string): Promise<UserDBResponse | null> => {
    try {
        const res = await axios.get<UserDBResponse>(`${process.env.DATABASE_URL}clients/getClientByEmail/${email}`);
        console.log(res.data)
        return res.data;

    } catch (error) {
        console.error('Error en getUserByEmail:', error);
        return null
    }
}

const getOrderById = async (userId: string): Promise<OrderDBResponse | null> => {
    try {
        const res = await axios.get<OrderDBResponse>(`${process.env.DATABASE_URL}clients/getClientOrder/${userId}`);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.error('Error en getOrderByUserId:', error);
        return null;
    }
}



const api = {
    login: async (email: string, password: string) => {
        const data = await login(email, password);
        return { data };
    },
    getUserByEmail: async (email: string) => {
        const data = await getUserByEmail(email);
        return { data };
    },
    getOrderById: async (userId: string) => {
        const data = await getOrderById(userId);
        return { data };
    },

};

export default api;
