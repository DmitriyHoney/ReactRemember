import { getAuthMeThunkCreator } from './reducer-auth.js';

const SET_INITIALIZE_APP = 'SET_INITIALIZE_APP';
const FAKE = 'FAKE';

const initialState = {
    isAppInitialize: false,
    fake: 0
}

export const appReducer = (state = initialState, action) =>{
    switch(action.type) {
        case SET_INITIALIZE_APP: {
            return {
                ...state,
                isAppInitialize: action.bool
            }
        }
        case FAKE: {
            return {
                ...state,
                fake: state.fake + 1
            }
        }
    }
    return state;
}

//AC
export const setInitializedApp = (bool) => ({ type: SET_INITIALIZE_APP, bool: bool})

//ThunkCreators
export const initializeAppThunkCreator = () => dispatch => {
    Promise.all([
        dispatch(getAuthMeThunkCreator())
    ]).then(() => {
        dispatch(setInitializedApp(true));
    })
}