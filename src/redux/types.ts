export enum ActionType {
    // User reducer type
    SET_AUTHENTICATED = 'user/setAuthencitated',
    SET_UNAUTHENTICATED = 'user/setUnauthenticated',
    SET_USER = 'user/setUser',
    LOADING_USER = 'user/loadingUser',
    // UI reducer types
    SET_ERRORS = 'ui/setErrors',
    LOADING_UI = 'ui/loadingUi',
    CLEAR_ERRORS = 'ui/clearErrors'
    // Data reducer types
}

export interface Action {
    type: ActionType,
    payload?: any
}

export interface Scream {
    id: string;
    userHandle: string;
    createdAt: any
    body: string;
    likeCount: number;
    commentCount: number;
    userImage?: string;
}

export interface UserDetail {
    website: string;
    bio: string;
    location: string;
}

export interface Comment {
    id: string;
    userHandle: string;
    screamId: string;
    body: string;
    createdAt: string;
}

export interface Like {
    id: string;
    screamId: string;
    userHandle: string;
}

export interface Notification {
    id: string;
    recipient: string;
    sender: string;
    read: boolean;
    screamId: string;
    type: 'like' | 'comment';
    createdAt: string;
}

export interface User extends Partial<UserDetail> {
    id: string;
    email: string;
    createdAt: string;
    handle: string;
    userId: string;
    imageUrl: string;
}