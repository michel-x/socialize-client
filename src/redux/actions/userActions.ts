import {Dispatch} from 'redux';
import {History} from 'history';
import {ActionType} from '../types';
import {login, signup} from '../../services/api/authentication';
import * as userService from '../../services/api/user';

export const loginUser = (email: string, password: string, history: History) => async (dispatch: Dispatch<any>) => {
    dispatch ({type: ActionType.LOADING_UI});
    const response = await login(email, password);

    if (response.data) {
        localStorage.setItem('FBIdToken', response.data);
        dispatch(getUserData());
        dispatch({type: ActionType.CLEAR_ERRORS});
        history.push('/');
    } else {
        dispatch({
            type: ActionType.SET_ERRORS,
            payload: {general: response.error?.message}
        })
    }
};

export const signUpUser = (email: string, password: string, confirmPassword: string, handle: string, history: History) => async (dispatch: Dispatch<any>) => {
    dispatch ({type: ActionType.LOADING_UI});
    const response = await signup(email, password, confirmPassword, handle);

    if (response.data) {
        localStorage.setItem('FBIdToken', response.data);
        dispatch(getUserData());
        dispatch({type: ActionType.CLEAR_ERRORS});
        history.push('/');
    } else {
        dispatch({
            type: ActionType.SET_ERRORS,
            payload: {general: response.error?.message}
        })
    }
};

export const logoutUser = () => (dispatch: Dispatch) => {
    localStorage.removeItem('FBIdToken');
    dispatch({
        type: ActionType.SET_UNAUTHENTICATED
    });
};

export const getUserData = () => async (dispatch: Dispatch) => {
    const response = await userService.get();
    if (response.data) {
        dispatch({
            type: ActionType.SET_USER,
            payload: response.data
        })
    } else {
        console.error(response);
    }
};
