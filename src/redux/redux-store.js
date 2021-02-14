import { applyMiddleware, combineReducers, createStore } from "redux";
import { profileReducer } from './reducer-profile';
import { dialogReducer } from './reducer-dialog';
import { sidebarReducer } from './reducer-sidebar';
import {usersReducer} from "./reducer-users";
import {appReducer} from "./reducer-app";
import authReducer from "./reducer-auth";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
window.state = store.getState();

export default store;