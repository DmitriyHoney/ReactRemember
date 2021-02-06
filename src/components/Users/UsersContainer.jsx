import React from "react";
import {connect} from "react-redux";
import {
    setUsersCurrentPageAC,
    setUsersAC,
    toggleFollowUserAC,
    setUsersTotalCountAC,
    setUsersIsLoadingAC
} from "../../redux/reducer-users";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

const mapStateToProps = (state) => ({
    usersPage: state.usersPage
})

const mapDispatchToProps = (dispatch) => ({
    toggleFollow: (id) => {
        dispatch(toggleFollowUserAC(id))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    },
    setCurrentPage: (page) => {
        dispatch(setUsersCurrentPageAC(page))
    },
    setTotalCount: (num) => {
        dispatch(setUsersTotalCountAC(num))
    },
    setIsLoading: (bool) => {
        dispatch(setUsersIsLoadingAC(bool))
    }
})

class UsersContainer extends React.Component {
    componentDidMount() {
        this.fetchUsers(this.props.usersPage.paginate.page, this.props.usersPage.paginate.count)
    }

    handlePaginateClick = (newPage) => {
        this.props.setCurrentPage(newPage);
        this.fetchUsers(newPage, this.props.usersPage.paginate.count)
    }

    fetchUsers(page, count) {
        this.props.setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
            .finally(() => {
                this.props.setIsLoading(false)
            })
    }

    render() {
        return <>
            {this.props.usersPage.isLoading ? <Preloader /> : ''}
            <Users
                usersPage={this.props.usersPage}
                changePage={this.handlePaginateClick}
                toggleFollow={this.props.toggleFollow}
            />
        </>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)