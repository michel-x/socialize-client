import {ActionType, User, Like, Notification, Action} from '../types';
import {initialState as globalInitialState} from '../store';

const initialState = globalInitialState.user;
type initialStateType = typeof initialState;

export default (state = initialState, action: Action): initialStateType => {
    switch(action.type) {
        case ActionType.SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case ActionType.SET_UNAUTHENTICATED:
            return initialState;
        case ActionType.SET_USER:
            return {
                authenticated: true,
                ...action.payload
            }
        default:
            return state;
    }
};