import {ActionType, Action} from '../types';
import {initialState as globalInitialState} from '../store';

const initialState = globalInitialState.ui;
type initialStateType = typeof initialState;

export default (state = initialState, action: Action): initialStateType => {
    switch(action.type) {
        case ActionType.SET_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case ActionType.CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                errors: null
            };
        case ActionType.LOADING_UI:
            return {
               ...state,
               loading: true
            }
        default:
            return state;
    }
};