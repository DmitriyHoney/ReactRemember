import React from "react";
import {connect} from "react-redux";
import { getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from "../../redux/reducer-users";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import { superSelectUsers } from "../../redux/selectors";


const mapStateToProps = (state) => {
    console.log('mapStateToProps users');
    return {
        followingProcessStack: state.usersPage.followingProcessStack,
        users: superSelectUsers(state),
        paginate: state.usersPage.paginate,
        isLoading: state.usersPage.isLoading
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     toggleFollow: (id) => {
//         dispatch(toggleFollowUserAC(id))
//     },
//     setUsers: (users) => {
//         dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (page) => {
//         dispatch(setUsersCurrentPageAC(page))
//     },
//     setTotalCount: (num) => {
//         dispatch(setUsersTotalCountAC(num))
//     },
//     setIsLoading: (bool) => {
//         dispatch(setUsersIsLoadingAC(bool))
//     }
// })

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.paginate.page, this.props.paginate.count)
    }

    handlePaginateClick = (newPage) => {
        this.props.getUsersThunkCreator(newPage, this.props.paginate.count)
    }

    render() {
        console.log('UsersContainer render');
        return <>
            {this.props.isLoading ? <Preloader /> : ''}
            <Users
                paginate={this.props.paginate}
                followingProcessStack={this.props.followingProcessStack}
                users={this.props.users}
                changePage={this.handlePaginateClick}
                followThunk={this.props.followThunkCreator}
                unfollowThunk={this.props.unfollowThunkCreator}
            />
        </>
    }
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, { getUsersThunkCreator, followThunkCreator, unfollowThunkCreator })
)(UsersContainer)