import {profileAPI} from "../api/api";

const ADD_POST                  = 'ADD_POST';
const SET_PROFILE               = 'SET_PROFILE';
const SET_PROFILE_STATUS        = 'SET_PROFILE_STATUS';

let initialState = {
    posts: [
        { username: 'dimka', content: 'something text', avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png', likes: 3 },
        { username: 'dimka', content: 'something text', avatar: 'https://apps.shopifycdn.com/listing_images/e8c7c2fb54b0b2b65bde115e60c3a9e9/icon/97093c0683cfe748e413a8b6bd496a10.png', likes: 2, },
        { username: 'dimka', content: 'hello! how are you?', avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png', likes: 5 },
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                username: 'dimka',
                content: action.text,
                avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png',
                likes: 0
            }
            return {
                ...state,
                posts: [
                    ...state.posts,
                    newPost
                ]
            }
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                status: action.text
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default: {
            return state;
        }
    }
}

//action creators
export const addPostActionCreator               = (text)        => ({ type: ADD_POST, text: text })
export const setProfileActionCreator            = (profile)     => ({ type: SET_PROFILE, profile: profile })
export const setProfileStatusActionCreator      = (text)        => ({ type: SET_PROFILE_STATUS, text: text })

//ThunkCreator
export const getProfileThunkCreator = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id)
            .then(data => dispatch(setProfileActionCreator(data)))
    }
}
export const getUserStatusThunkCreator = id => {
    return (dispatch) => {
        profileAPI.getUserStatus(id)
            .then(data => {
                dispatch(setProfileStatusActionCreator(data))
            })
    }
}
export const updateProfileStatusThunkCreator = (text) => {
    return (dispatch) => {
        profileAPI.updateProfile(text)
            .then(data => {
                if (data.resultCode === 0)
                    dispatch(setProfileStatusActionCreator(text))
            })
    }
}