const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSSAGE_BODY';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Vanya' },
        { id: 2, name: 'Ksu' },
        { id: 3, name: 'Gleb' },
        { id: 4, name: 'Vasya' },
        { id: 5, name: 'Alisa' },],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Hi' },
        { id: 5, message: 'Hi' },
    ],
    messageText: '',
}
const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: state.messageText}],
                messageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                messageText: action.text
            }
        }
            
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