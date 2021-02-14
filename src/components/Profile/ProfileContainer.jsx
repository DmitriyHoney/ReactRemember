import {
    addPostActionCreator,
    getProfileThunkCreator, getUserStatusThunkCreator,
    updateProfileStatusThunkCreator
} from "../../redux/reducer-profile";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import React from 'react'

import withAuthRedirect from '../../hoc/withAuthRedirect'
import {compose} from "redux";



const {connect} = require("react-redux");

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    currentUserId: state.auth.id
})

// const mapDispatchToProps = (dispatch) => ({
//     handleInput: (text) => {
//         dispatch(updatePostTextareaActionCreator(text))
//     },
//     handleAddPost: () => {
//         dispatch(addPostActionCreator())
//     }
// })

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.id || this.props.currentUserId;
        this.props.getProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}




export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, { 
        addPostActionCreator, getProfileThunkCreator, 
        updateProfileStatusThunkCreator, getUserStatusThunkCreator
    })
)(ProfileContainer)