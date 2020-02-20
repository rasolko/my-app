import React from 'react';
import { addMessageCreator, updateNewMessageBodyCreator } from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewTextMessage: (text) => {
            dispatch(updateNewMessageBodyCreator(text));
        },
        sendMessage: () => {
            dispatch(addMessageCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;