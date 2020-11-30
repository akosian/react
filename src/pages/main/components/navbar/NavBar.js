import React from "react";
import navBar from './NavigationBar.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

let itemClassName = navBar.item;
let active = navBar.active;

class NavBarComponent extends React.Component {

    render(){
        return (
            <nav className={navBar.nav}>
                <div className={itemClassName}>
                    <NavLink to={`/profile/${this.props.currentUserId}`} activeClassName={active}>Profile</NavLink>
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
}

let mapStateToProps = (state) => {
    return {
        currentUserId: state.profilePage.currentUserId
    }
}

let mapDispatchToProps = {
}

export const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);