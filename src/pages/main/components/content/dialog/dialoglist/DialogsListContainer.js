import React from "react";
import DialogList from "./DialogList";
import {
    AddMessageCreator,
    UpdateNewMessageTextCreator
} from "../../../../../../redux/components/dialogs/messages/MessageActionCreator";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogListItems: state.dialogsPage.messages,
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
        onAddMsg: () => {
            dispatch(AddMessageCreator())
        }
    }
}

const DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList);

export default DialogListContainer;