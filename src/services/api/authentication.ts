import axios from 'axios';
import {Response} from './index';

export const login = async (email: string, password: string): Promise<Response<string>> => {
    try {
        const res = await axios.post('/login', {});

        if (res.status === 200) {
            return {
                data: res.data.token,
                status: res.status
            };
        } else {
            return {
                status: res.status,
                error: {
                    code: res.status,
                    message: 'Authentication failed'
                }
            };
        }
    } catch (e) {
        return {
            error: {
                code: 0,
                message: 'Unexpected error'
            },
            status: 0
        };
    }
};