import instance from './index';
import { storeToken } from './storage';
const signup = async (data) => {
    try {
        const response = await instance.post("/mini-project/api/auth/register", data);
        storeToken(response.data.token)
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const login = async (data) => {
    try {
        const response = await instance.post("/mini-project/api/auth/login", data);
        storeToken(response.data.token)
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { signup, login };
