import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {LogoutThunkCreator} from "../../../../redux/components/auth/auth-reducer";
import {getUserDataSelector} from "../../../../redux/components/auth/authSelectors";

class HeaderComponent extends React.Component {

    render() {
        return <Header isAuthorized={this.props.isAuthorized} login={this.props.data.login} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized,
    data: getUserDataSelector(state)
})

const mapDispatchToProps = ({
    logout: LogoutThunkCreator
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
