import {Response, Error, User, Notification, Like, baseUrl} from './index';

export const get = async (): Promise<Response<{credentials: User, likes: Like[]; notifications: Notification[]}>> => {
    try {
        const response = await fetch(`${baseUrl}/user`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${window.localStorage.FBIdToken}`
            }
        });
        
        if (response.status === 200) {
            const data: {credentials: User, likes: Like[]; notifications: Notification[]} = await response.json();
            return {
                data,
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