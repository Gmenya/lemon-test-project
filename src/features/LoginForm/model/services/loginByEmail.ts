import axios from 'axios';

interface LoginCredentials {
    email: string;
    password: string;
    isChecked:boolean
}

export async function loginByEmail(credentials: LoginCredentials) {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
        const response = await axios.post(`${apiUrl}/login`, credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
}
