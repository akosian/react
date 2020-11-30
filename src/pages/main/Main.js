import Header from './components/header/Header'
import {NavBar} from "./components/navbar/NavBar"
import './Main.css'
import Dialogs from "./components/content/dialog/Dialogs"
import Music from './components/content/music/Music'
import News from './components/content/news/News'
import {Route} from "react-router-dom";
import React from "react";
import UsersContainer from "./components/content/users/UsersContainer";
import {ProfileContainer} from "./components/content/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";

const Main = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <Dialogs/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
        </div>
    )
}

export default Main;