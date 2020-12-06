import {NavBar} from "./components/navbar/NavBar"
import './Main.css'
import Music from './components/content/music/Music'
import News from './components/content/news/News'
import {Route} from "react-router-dom";
import React from "react";
import UsersContainer from "./components/content/users/UsersContainer";
import {ProfileContainer} from "./components/content/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/content/login/Login";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "../../redux/app-reducer";
import Preloader from "./components/content/common/Preloader";

const DialogListContainer = React.lazy(() => import('./components/content/dialog/dialoglist/DialogsListContainer'))

class Main extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => {
                        return (<React.Suspense fallback={<Preloader/>}><DialogListContainer/></React.Suspense>)
                    }}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(Main)