import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header.jsx'
import { Provider } from 'react-redux';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    let { store } = props;

    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="app-wrapper" >
                    <Header />
                    <NavbarContainer />
                    <div className="content">
                        <Route path="/profile" component={() => <ProfileContainer />}/>
                        <Route path="/dialogs" component={() => <DialogsContainer />}/>
                        <Route path="/users" component={() => <UsersContainer />}/>
                    </div>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;