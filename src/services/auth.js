import { post } from './api';

export const loginUser = async (email, password) => {
    return await post('/login', { email, password });
    };

export const registerUser = async (userInfo) => {
    return await post('/register', userInfo);
};

