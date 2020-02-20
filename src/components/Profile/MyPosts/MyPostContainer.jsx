import React from 'react';
import { updatePostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let newPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let updatePostText = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    }
    return (
        <MyPosts newPost={newPost} updatePostText={updatePostText} posts={state.profilePage.posts} postText={state.profilePage.postText} />
    )
}
export default MyPostsContainer;