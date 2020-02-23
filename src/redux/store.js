import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from './usersReducer';

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
        usersPage: {
            users: [
                {
                    id: 1,
                    userName: 'Vanya',
                    ava: 'https://www.meme-arsenal.com/memes/33b0915267e6cc40327a7a780bb64923.jpg',
                    text: 'some text',
                    followed: true,
                },
                {
                    id: 2,
                    userName: 'Ksu',
                    ava: 'https://www.meme-arsenal.com/memes/33b0915267e6cc40327a7a780bb64923.jpg',
                    text: 'some text',
                    followed: false,
                },
            ]
        }
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
        this._state.usersPage = usersReducer(this._state.usersPage, action);
        this._callSubscriber(this._state);
    }
}
export default store;