import React from 'react';
import { addMessageCreator, updateNewMessageBodyCreator } from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState();
    let sendMessage = () => {
        props.store.dispatch(addMessageCreator());
    }
    let updateNewTextMessage = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text));
    }
    return (
        <Dialogs 
            sendMessage={sendMessage} 
            updateNewTextMessage={updateNewTextMessage} 
            dialogs={state.dialogsPage.dialogs} 
            messages={state.dialogsPage.messages}
            messageText={state.dialogsPage.messageText} />
    )
}
export default DialogsContainer;