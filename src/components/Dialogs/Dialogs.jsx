import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsArr = props.dialogsPage.dialogs.map( (d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesArr = props.dialogsPage.messages.map( (m) => <Message message={m.message} key={m.id} />);
    let textareaElement = React.createRef();
    let sendMessage = () => {
        props.sendMessage();
    }
    let updateNewTextMessage = () => {
        props.updateNewTextMessage(textareaElement.current.value);
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
                <textarea ref={textareaElement} onChange={updateNewTextMessage} placeholder='Write' value={props.dialogsPage.messageText}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs;