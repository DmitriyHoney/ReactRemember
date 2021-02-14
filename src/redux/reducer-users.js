//CONST FOR AC
import {usersAPI} from "../api/api";

const SET_USERS                     = 'SET_USERS';
const TOGGLE_FOLLOW_USER            = 'TOGGLE_FOLLOW_USER';
const SET_CURRENT_PAGE_USERS        = 'SET_CURRENT_PAGE_USERS';
const SET_TOTAL_COUNT_USERS         = 'SET_TOTAL_COUNT_USERS';
const SET_IS_LOADING                = 'SET_IS_LOADING';
const SET_FOLLOWING_PROCESS_STACK   = 'SET_FOLLOWING_PROCESS_STACK';


const initialState = {
    users: [],
    followingProcessStack: [], //добавляем пользователей, когда запрос уходит и пока он не пришёл id пользователя здесь
    paginate: {
        page: 1,
        count: 10, //отображается на странице
        totalCount: 0
    },
    isLoading: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: [ ...action.users ]
            }
        }
        case SET_FOLLOWING_PROCESS_STACK: {
            let isUserInStack = state.followingProcessStack.includes(action.id)
            return {
                ...state,
                followingProcessStack: isUserInStack
                    ? state.followingProcessStack.filter(userId => Number(userId) !== Number(action.id))
                    : [ ...state.followingProcessStack, action.id]
            }
        }
        case SET_CURRENT_PAGE_USERS: {
            return {
                ...state,
                paginate: {
                    ...state.paginate,
                    page: action.page
                }
            }
        }
        case SET_TOTAL_COUNT_USERS: {
            return {
                ...state,
                paginate: {
                    ...state.paginate,
                    totalCount: action.totalCount
                }
            }
        }
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.bool
            }
        }
        case TOGGLE_FOLLOW_USER: {
            return{
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: !u.followed
                        }
                    }
                    return {...u}
                })
            }
        }
        default: {
            return state
        }
    }
}

//AC
export const toggleFollowUserAC             = (id)          => ({type: TOGGLE_FOLLOW_USER, userId: id});
export const setUsersAC                     = (users)       => ({ type: SET_USERS, users: users });
export const setUsersCurrentPageAC          = (page)        => ({ type: SET_CURRENT_PAGE_USERS, page: page });
export const setUsersTotalCountAC           = (totalCount)  => ({ type: SET_TOTAL_COUNT_USERS, totalCount: totalCount });
export const setUsersIsLoadingAC            = (bool)        => ({ type: SET_IS_LOADING, bool: bool });
export const setFollowingProcessStackAC     = (id)          => ({ type: SET_FOLLOWING_PROCESS_STACK, id: id });

//ThunksCreators
export const getUsersThunkCreator = (page, count) => {
    return (dispatch) => {
        dispatch(setUsersCurrentPageAC(page))
        dispatch(setUsersIsLoadingAC(true));
        usersAPI.getUsers(page, count).then(data => {
            dispatch(setUsersAC(data.items))
            dispatch(setUsersTotalCountAC(data.totalCount))
        }).finally(() => {
            dispatch(setUsersIsLoadingAC(false))
        })
    }
}

export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(setFollowingProcessStackAC(id))
        usersAPI.follow(id).then(data =>  {
            if (data.resultCode === 0) {
                dispatch(toggleFollowUserAC(id))
                dispatch(setFollowingProcessStackAC(id))
            }
        })
    }
}

export const unfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(setFollowingProcessStackAC(id))
        usersAPI.unfollow(id).then(data =>  {
            if (data.resultCode === 0) {
                dispatch(toggleFollowUserAC(id))
                dispatch(setFollowingProcessStackAC(id))
            }
        })
    }
}