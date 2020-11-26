import React from "react";
import DialogList from "./DialogList";
import {
    AddMessageCreator,
    UpdateNewMessageTextCreator
} from "../../../../../../redux/components/dialogs/messages/MessageActionCreator";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        threads: state.dialogsPage.threads,
        dialogsData: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onNewMsgTextChange: (text) => {
            let action = UpdateNewMessageTextCreator(text)
            dispatch(action)
        },
        onAddMsg: (id) => {
            dispatch(AddMessageCreator(id))
        }
    }
}

const DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList);

export default DialogListContainer;