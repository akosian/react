import Header from './components/header/Header'
import NavBar from "./components/navbar/NavBar"
import './Main.css'
import Dialogs from "./components/content/dialog/Dialogs"
import Music from './components/content/music/Music'
import News from './components/content/news/News'
import {Route} from "react-router-dom";
import React from "react";
import Profile from "./components/content/profile/Profile";
import Users from "./components/content/users/Users";

const Main = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <Dialogs/>}/>
                <Route path='/users' render={() => <Users/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
        </div>
    )
}

export default Main;