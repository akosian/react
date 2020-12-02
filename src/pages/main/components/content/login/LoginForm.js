import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formscomponent/FormsControls";
import css from '../../../components/content/common/formscomponent/FormsControls.module.css'
import {maxLength20, required} from "../../../../../utils/validators/validation";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name='email' type='text' placeholder='Enter your email' component={Input}
                        validate={[required, maxLength20]}/></div>
            <div><Field name='password' type='password' placeholder='Enter your password' component={Input}
                        validate={[required, maxLength20]}/></div>
            <div><Field name='rememberMe' type={'checkbox'} component={'input'}/> remember me</div>
            {props.error && <div className={css.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Confirm</button>
            </div>
        </form>)
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

export default ReduxLoginForm