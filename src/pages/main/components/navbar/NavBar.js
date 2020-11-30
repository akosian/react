import React from "react";
import {connect} from "react-redux";
import NavBarContent from "./NavBarContent";
import {withAuthRedirect} from "../../../../hoc/WithAuthRedirect";
import {compose} from "redux";

class NavBarComponent extends React.Component {

    render() {
        return <NavBarContent currentUserId={this.props.currentUserId}/>
    }
}

let mapStateToProps = (state) => {
    return {
        currentUserId: state.profilePage.currentUserId,
        isAuth: state.auth.isAuthorized
    }
}

export const NavBar = compose(connect(mapStateToProps, {}), withAuthRedirect)(NavBarComponent);