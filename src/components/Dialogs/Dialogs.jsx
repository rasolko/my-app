import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageCreator, updateNewMessageBodyCreator } from './../../redux/dialogsReducer';

const Dialogs = (props) => {
    let dialogsArr = props.state.dialogs.map( (d) => <DialogItem name={d.name} id={d.id} />);
    let messagesArr = props.state.messages.map( (m) => <Message message={m.message} id={m.id} />);
    let textareaElement = React.createRef();
    let sendMessage = () => {
        props.dispatch(addMessageCreator());
    }
    let updateNewTextMessage = () => {
        props.dispatch(updateNewMessageBodyCreator(textareaElement.current.value));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsArr}
            </div>
            <div className={s.messages}>
                {messagesArr}
            </div>
            <div>
                <textarea ref={textareaElement} onChange={updateNewTextMessage} placeholder='Write' value={props.state.messageText}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs;