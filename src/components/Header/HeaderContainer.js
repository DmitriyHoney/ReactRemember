import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logoutThunkCreator } from "../../redux/reducer-auth";
import {compose} from "redux";

let mapStateToProps = state => {
    
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

export default compose(
    connect(mapStateToProps, { logoutThunkCreator })
)(HeaderContainer)