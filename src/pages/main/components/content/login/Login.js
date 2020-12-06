import React from 'react'
import css from './Login.module.css'
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {LoginThunkCreator} from "../../../../../redux/components/auth/auth-reducer";
import {Redirect} from "react-router";
import {getUserDataSelector} from "../../../../../redux/components/auth/authSelectors";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password)
    }

    if (props.isAuthorized) {
        return <Redirect to={`/profile`}/>
    }

    return (<div className={css.content}>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>)
}

const mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized,
    data: getUserDataSelector(state)
})

const mapDispatchToProps = ({
    login: LoginThunkCreator
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)