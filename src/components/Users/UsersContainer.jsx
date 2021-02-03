import {connect} from "react-redux";
import Users from './Users.jsx'
import { setUsersAC, toggleFollowUserAC } from "../../redux/reducer-users";

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

export default connect(mapStateToProps, mapDispatchToProps)(Users)