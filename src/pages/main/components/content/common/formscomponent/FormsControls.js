import React from "react";
import css from './FormsControls.module.css'

const FormControl = (props) => {
    let hasError = props.meta.error && props.meta.touched
    return (<div className={hasError ? css.error : ''}>
        <div>
            {props.children}
        </div>
        {hasError && <span>{props.meta.error}</span>}
    </div>)
}

export const Textarea = (props) => {
    return <FormControl {...props} {...props.meta}><textarea {...props.input} {...props}/></FormControl>

}

export const Input = (props) => {
    return <FormControl {...props} {...props.meta}><input {...props.input} {...props}/></FormControl>

}