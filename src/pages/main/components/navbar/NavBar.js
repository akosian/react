import React from "react";
import navBar from './NavigationBar.module.css'
import {NavLink} from "react-router-dom";

let itemClassName = navBar.item;
let active = navBar.active;

const NavBar = () => {
    return (
        <nav className={navBar.nav}>
            <div className={itemClassName}>
                <NavLink to="/profile" activeClassName={active}>Profile</NavLink>
            </div>
            <div className={itemClassName}>
                <NavLink to="/dialogs" activeClassName={active}>Messages</NavLink>
            </div>
            <div className={itemClassName}>
                <NavLink to='/users' activeClassName={active}>Users</NavLink>
            </div>
            <div className={itemClassName}>
                <NavLink to='/news' activeClassName={active}>News</NavLink>
            </div>
            <div className={itemClassName}>
                <NavLink to='/music' activeClassName={active}>Music</NavLink>
            </div>
            <div className={itemClassName}>
                <NavLink to='/settings' activeClassName={active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;