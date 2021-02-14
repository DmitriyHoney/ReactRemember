import { stopSubmit } from 'redux-form';

import {authAPI} from "../api/api";

const SET_AUTH      = 'SET_AUTH'
const SET_AUTH_DATA = 'SET_AUTH_DATA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_DATA: {
        return { ...state, ...action.data }
        }
        case SET_AUTH: {
            return { ...state, isAuth: action.bool }
        }
        default: {
            return state
        }
    }
}

//ActionCreators
export const setAuthDataAC     = (data)        => ({type: SET_AUTH_DATA, data: {email: data.email, login: data.login, id: data.id}})
export const setAuthAC         = (bool)        => ({type: SET_AUTH, bool: bool})

//ThunksCreator

export const getAuthMeThunkCreator = () => {
    return dispatch => {
        return authAPI.getAuthMe()
            .then(data => {
                dispatch(setAuthDataAC(data.data));
                if (data.resultCode === 0) dispatch(setAuthAC(true));
            })
    }
}
export const signInThunkCreator = (formData) => {
    return dispatch => {
        authAPI.signIn(formData).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthMeThunkCreator())
            } 
            else if (data.resultCode === 1) {
                dispatch(stopSubmit('login', {_error: 'incorrect email or password'}))
            }
        })
    }
}
export const logoutThunkCreator = () => {
    return dispatch => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthAC(false))
                dispatch(setAuthDataAC({email: null, login: null, id: null}))
            }
        })
    }
}

export default authReducer;