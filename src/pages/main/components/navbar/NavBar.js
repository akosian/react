import React from "react";
import {connect} from "react-redux";
import NavBarContent from "./NavBarContent";
import {withAuthRedirect} from "../../../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getCurrentUserIdSelector} from "../../../../redux/components/auth/authSelectors";

class NavBarComponent extends React.Component {

    render() {
        return <NavBarContent currentUserId={this.props.currentUserId}/>
    }
}

let mapStateToProps = (state) => {
    return {
        currentUserId: getCurrentUserIdSelector(state),
        isAuth: state.auth.isAuthorized
    }
}

export const NavBar = compose(connect(mapStateToProps, {}), withAuthRedirect)(NavBarComponent);