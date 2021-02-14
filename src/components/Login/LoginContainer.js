import React from 'react'
import Login from "./Login";
import {connect} from "react-redux";
import { signInThunkCreator } from '../../redux/reducer-auth.js';
import { Redirect } from 'react-router-dom';

let mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

class LoginContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    signIn = (formData) => {
        this.props.signInThunkCreator(formData)
    }
    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/profile'} />
        }
        return <Login signIn={this.signIn} />
    }
}

export default connect(mapStateToProps, { signInThunkCreator })(LoginContainer)