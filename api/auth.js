import instance from './index';

const signup = async (data) => {
    try {
        const response = await instance.post("/mini-project/api/auth/register", data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const login = async (data) => {
    try {
        const response = await instance.post("/mini-project/api/auth/login", data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { signup, login };
