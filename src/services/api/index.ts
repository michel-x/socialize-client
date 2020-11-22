export type {Scream, UserDetail, Comment, Like, Notification, User} from '../../redux/types';

export const baseUrl = 'http://localhost:5001/socialize-e89ed/us-central1/api';

export interface Error {
    code: string | number;
    message: string;
}

export type Response<T> = {
    data: T;
    status: number;
    error?: undefined
} | {
    error: Error ;
    status: number;
    data?: undefined;
}