import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLength10, required} from "../../../../../../../utils/validators/validation";
import {Textarea} from "../../../common/formscomponent/FormsControls";

const NewPostForm = (props) => {

    return (<form onSubmit={props.handleSubmit}>
        <Field name={'postText'} placeholder='Enter post text...' component={Textarea} value={''}
               validate={[required,maxLength10]}/>
        <button>Save</button>
    </form>)
}

const NewPost = reduxForm({form: 'newPost'})(NewPostForm);

export default NewPost