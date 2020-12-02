import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {LogoutThunkCreator, SetAuthorizationThunkCreator} from "../../../../redux/auth-reducer";

class HeaderComponent extends React.Component {

    componentDidMount() {
        this.props.setAuthorization()
    }

    render() {
        return <Header isAuthorized={this.props.isAuthorized} login={this.props.data.login} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized,
    data: state.auth.data
})

const mapDispatchToProps = ({
    setAuthorization: SetAuthorizationThunkCreator,
    logout: LogoutThunkCreator
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
