import React from "react";

let newText = React.createRef();

const NewNewsForm = (props) => {
    let fillNewsText = () => {
        props.fillText(newText.current.value)
    }

    return (
        <div>
            <textarea onChange={fillNewsText} ref={newText} value={props.newNewsText}/>
            <button onClick={props.onAddNews}>Add</button>
        </div>
    )
}

export default NewNewsForm;