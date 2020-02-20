const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
let initialState = {
    posts: [
        { message: 'Hi', like: '5' },
        { message: 'Hello', like: '10' },
    ],
    postText: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push({ message: state.postText, like: 0 });
            state.postText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.postText = action.text;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        text: text,
    }
}
export default profileReducer;