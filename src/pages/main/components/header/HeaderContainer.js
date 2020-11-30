import React from 'react'
import Header from "./Header";
import * as axios from "axios";
import {SetAuthorization} from "../../../../redux/authAC";
import {connect} from "react-redux";

class HeaderComponent extends React.Component {

    componentDidMount() {
        this.isAuthorized()
    }

    isAuthorized = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}
        ).then(response => {
            let isAuthorized = response.data.resultCode === 0
            let {id, login, email} = response.data.data
            this.props.setAuthorization(id, login, email, isAuthorized)
        })
    }

    render() {
        return <Header isAuthorized={this.props.isAuthorized} login={this.props.data.login}/>
    }
}


const mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized,
    data: state.auth.data
})

const mapDispatchToProps = ({
    setAuthorization: SetAuthorization
})

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)

export default HeaderContainer;
