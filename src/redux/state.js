import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { message: 'Hi', like: '5' },
                { message: 'Hello', like: '10' },
            ],
            postText: '',
        },
        dialogsPage: {
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
        },
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log("Anything");
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}
export default store;