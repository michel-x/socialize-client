import axios from 'axios';
import {Response, Scream} from './index';

export const search = async (): Promise<Response<Scream[]>> => {

    const res = await axios.get('/screams');
    const result = res.data;

    if (result?.screams) {
        const screams: Scream[] = result.screams as Scream[];
        return {
            data: screams,
            status: res.status
        }
    } else {
        return {
            error: {
                code: res.status,
                message: 'Unexpected error'
            },
            status: res.status
        };
    }
};