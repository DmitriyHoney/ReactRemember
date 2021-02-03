//CONST FOR AC
const SET_USERS         = 'SET_USERS';
const TOGGLE_FOLLOW_USER         = 'TOGGLE_FOLLOW_USER';


const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users
                ]
            }
        }
        case TOGGLE_FOLLOW_USER: {
            return{
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            follow: !u.follow
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
export const toggleFollowUserAC = (id) => ({type: TOGGLE_FOLLOW_USER, userId: id});
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });