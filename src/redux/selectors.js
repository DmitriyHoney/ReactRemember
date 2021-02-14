import { createSelector } from 'reselect'
//primary selectors
export const selectUsers = (state) => state.usersPage.users;

//logic selectors
export const superSelectUsers = createSelector(selectUsers, (users) => {
    return users.filter(u => true)
})
