const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSSAGE_BODY';
const ADD_MESSAGE = 'ADD_MESSAGE';

const dialogsReducer = (state, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            state.messages.push({ id: 6, message: state.messageText});
            state.messageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.messageText = action.text;
            return state;
        default:
            return state;
    }
}
export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        text: text,
    }
}
export const addMessageCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export default dialogsReducer;