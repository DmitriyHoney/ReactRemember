import { combineReducers, createStore } from "redux";
import { postReducer } from './reducer-post';
import { dialogReducer } from './reducer-dialog';
import { sidebarReducer } from './reducer-sidebar';
import {usersReducer} from "./reducer-users";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: postReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers);

window.store = store;
window.state = store.getState();

export default store;