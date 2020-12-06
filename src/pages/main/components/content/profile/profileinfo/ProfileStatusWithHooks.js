import React, {useState, useEffect} from "react";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)


    let [localStatus, setLocalStatus] = useState(props.status)

    useEffect(() => {
        setLocalStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        props.updateStatus(localStatus)
        setEditMode(false)
    }

    const onLocalStatusChange = (e) => {
        setLocalStatus(e.currentTarget.value)
    }

    return (<div>
        {!editMode &&
        <div>
            <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
        </div>
        }
        {editMode &&
        <div>
            <input type='text' autoFocus={true} onBlur={deactivateEditMode} onChange={(e) => {
                onLocalStatusChange(e)
            }} value={localStatus}/>
        </div>
        }
    </div>)
}

export default ProfileStatus