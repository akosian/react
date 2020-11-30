import React from "react";
import DialogList from "./DialogList";
import {
    AddMessageCreator,
    UpdateNewMessageTextCreator
} from "../../../../../../redux/components/dialogs/messages/MessageActionCreator";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../../../../hoc/WithAuthRedirect";
import {compose} from "redux";

class DialogsListComponent extends React.Component {

    render() {
        return <DialogList dialogsData={this.props.dialogsData} threads={this.props.threads}
                           newMessageText={this.props.newMessageText}/>
    }
}

let mapStateToProps = (state) => {
    return {
        threads: state.dialogsPage.threads,
        dialogsData: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = {
    onNewMsgTextChange: UpdateNewMessageTextCreator,
    onAddMsg: AddMessageCreator
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(DialogsListComponent);