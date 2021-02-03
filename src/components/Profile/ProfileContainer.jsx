import {addPostActionCreator, updatePostTextareaActionCreator} from "../../redux/reducer-post";
import Profile from "./Profile";


const {connect} = require("react-redux");

const mapStateToProps = (state) => ({
    profilePage: state.profilePage
})

const mapDispatchToProps = (dispatch) => ({
    handleInput: (text) => {
        dispatch(updatePostTextareaActionCreator(text))
    },
    handleAddPost: () => {
        dispatch(addPostActionCreator())
    }
})

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;