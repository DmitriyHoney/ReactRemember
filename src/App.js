import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Profile from './components/Profile/Profile.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx' 


const App = (props) => {
    let {profilePage, dialogsPage, sidebarPage } = props.store;
    return (
        <BrowserRouter>
            <div className="app-wrapper" >
                <Header />
                <Navbar sidebarPage={sidebarPage}/>
                <div className="content">
                    <Route path="/profile" component={() => <Profile profilePage={profilePage} dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs" component={() => <Dialogs dialogsPage={dialogsPage}/>}/>
                </div>
                
            </div>
        </BrowserRouter>
    );
}

export default App;