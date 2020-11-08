import Header from './components/header/Header'
import ProfileContent from './components/content/profile/ProfileContent'
import NavBar from "./components/navbar/NavBar"
import './Main.css'
import Dialogs from "./components/content/dialog/Dialogs"
import Music from './components/content/music/Music'
import News from './components/content/news/News'
import {BrowserRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";

const Main = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={ProfileContent}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Main;