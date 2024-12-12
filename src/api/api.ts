import axios from "axios";


const login = async (email: string, password: string) => {
    try {
        const response = await fetch(`http://localhost:8080/api/clients/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error(`Request failed. Status: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();  // Esperar que se resuelva la promesa
        console.log(data);  // Imprimir los datos correctamente
        return data;  // Retornar los datos
    } catch (error) {
        console.log('Error en login:', error);
        throw error;
    }
};

const getUserByEmail = async (email: string) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/clients/getClientByEmail/${email}`);
        console.log(res.data)
        return res.data;
        
    }catch (error) {
        console.error('Error en getUserByEmail:', error);
       
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
 
};

export default api;
