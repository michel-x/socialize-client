import {Response, Error} from './index';

const baseUrl = 'http://localhost:5001/socialize-e89ed/us-central1/api';

export const login = async (email: string, password: string): Promise<Response<string>> => {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
        
        if (response.status === 200) {
            const data: {token: string} = await response.json();
            return {
                data: data.token,
                status: response.status
            };
        } else {
            const data: {error: Error} = await response.json();
            return {
                status: response.status,
                error: {
                    code: response.status,
                    message: data.error.message
                }
            };
        }
    } catch (e) {
        console.error(e);
        return {
            error: {
                code: 0,
                message: 'Unexpected error'
            },
            status: 0
        };
    }
};

export const signup = async (email: string, password: string, confirmPassword: string, handle: string): Promise<Response<string>> => {
    try {
        const response = await fetch(`${baseUrl}/signup`, {
            method: 'POST',
            body: JSON.stringify({email, password, confirmPassword, handle}),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
        
        if (response.status === 201) {
            const data: {token: string} = await response.json();
            return {
                data: data.token,
                status: response.status
            };
        } else {
            const data: {error: Error} = await response.json();
            return {
                status: response.status,
                error: {
                    code: response.status,
                    message: data.error.message
                }
            };
        }
    } catch (e) {
        console.error(e);
        return {
            error: {
                code: 0,
                message: 'Unexpected error'
            },
            status: 0
        };
    }
};