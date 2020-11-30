import React from 'react'
import css from './Login.module.css'

const Login = () => {
    return (<div className={css.content}>
        <h1>Login</h1>
        <div><input type='text' placeholder='Enter your email'/></div>
        <div><input type='password' placeholder='Enter your password'/></div>
        <div><input type='submit' value='Confirm'/></div>
    </div>)
}

export default Login