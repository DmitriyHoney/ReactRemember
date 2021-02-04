import {connect} from "react-redux";
import { setUsersAC, toggleFollowUserAC } from "../../redux/reducer-users";
import UsersC from "./UsersC";

const mapStateToProps = (state) => ({
    usersPage: state.usersPage
})

const mapDispatchToProps = (dispatch) => ({
    toggleFollow: (id) => {
        dispatch(toggleFollowUserAC(id))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersC)