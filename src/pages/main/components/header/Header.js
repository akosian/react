import header from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={header.header}>
            <img src='https://cdn0.iconfinder.com/data/icons/round-arrows-1/134/small_left_red-512.png'/>
            <div className={header.loginBlock}>
                {!props.isAuthorized ? <NavLink to={'/login'}>Login</NavLink> : props.login}
            </div>
        </header>
    )
}

export default Header;