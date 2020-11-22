import {User, Like, Notification, Comment} from './types';
// Reducers

export interface GlobalState {
    user: {
        authenticated: boolean,
        credentials: User | null,
        likes: Like[],
        notifications: Notification[]
    };
    data: any;
    ui: {
        loading: boolean;
        errors: {[key: string]: string | undefined} | null;
    };
}

export const initialState: GlobalState = {
    user: {
        authenticated: false,
        credentials: null,
        likes: [],
        notifications: []
    },
    data: {},
    ui: {
        loading: false,
        errors: null
    }
};