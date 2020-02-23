const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
let initialState = {
    posts: [
        { id: 1, message: 'Hi', like: '5' },
        { id: 2, message: 'Hello', like: '10' },
    ],
    postText: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: state.postText, like: 0 }],
                postText: ''
            }
        }
            
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                postText: action.text
            }
        }
            
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