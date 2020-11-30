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

let mapDispatchToProps = {
    onNewMsgTextChange: UpdateNewMessageTextCreator,
    onAddMsg: AddMessageCreator
}

const DialogListContainer = connect(mapStateToProps, mapDispatchToProps)(DialogList);

export default DialogListContainer;