import Header from './components/header/Header'
import ProfileContent from './components/content/profile/ProfileContent'
import NavBar from "./components/navbar/NavBar"
import './Main.css'
import Dialogs from "./components/content/dialog/Dialogs"
import Music from './components/content/music/Music'
import News from './components/content/news/News'
import {Route} from "react-router-dom";
import React from "react";

const Main = (props) => {

    let profilePageData = props.store.getState().profilePage;
    let dialogsPageData = props.store.getState().dialogsPage;
    let profilePageFunctions = props.store.getPagesFunctions().profilePage;

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <ProfileContent state={profilePageData} profilePageFunctions={profilePageFunctions}/>}/>
                <Route path='/dialogs' render={() => <Dialogs state={dialogsPageData}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
        </div>
    )
}

export default Main;