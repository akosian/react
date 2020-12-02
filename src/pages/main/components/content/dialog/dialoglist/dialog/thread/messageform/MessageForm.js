import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../../../common/formscomponent/FormsControls";
import {maxLength10, required} from "../../../../../../../../../utils/validators/validation";

const MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field value={props.newMessageText} component={Textarea}
                   name={'newMsgText'} validate={[required, maxLength10]}/>
            <button>Send</button>
        </form>
    )
}

const Form = reduxForm({form: 'message'})(MessageForm)

export default Form;