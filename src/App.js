import { Route, withRouter } from 'react-router-dom'

import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import NewsContainer from "./components/News/NewsContainer";
import { compose } from 'redux';

import { initializeAppThunkCreator } from './redux/reducer-app'
import Preloader from './components/common/Preloader/Preloader';



const mapStateToProps = (state) => {
    return {
        isAppInitialize: state.app.isAppInitialize
    }
}

class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppThunkCreator()
    }
    render() {
        console.log('render app');
        if (!this.props.isAppInitialize) {
            return <Preloader />
        }
        return (
            <Provider store={this.props.store}>
                <div className="app-wrapper" >
                    <HeaderContainer />
                    <NavbarContainer />
                    <div className="content">
                        <Route path="/profile/:id?"  component={() => <ProfileContainer />}/>
                        <Route path="/dialogs" component={() => <DialogsContainer />}/>
                        <Route path="/users" component={() => <UsersContainer />}/>
                        <Route path="/login" component={() => <LoginContainer />}/>
                        <Route path="/news" component={() => <NewsContainer />}/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeAppThunkCreator })
)(App);