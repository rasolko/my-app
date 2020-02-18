import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { updatePostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';

const MyPosts = (props) => {
  let postsArr = props.posts.map( (p) => <Post message={p.message} like={p.like} />);
  let textareaElement = React.createRef();
  let newPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let updatePostText = () => {
    props.dispatch(updatePostTextActionCreator(textareaElement.current.value));
  }
  return (
    <div>
      My Posts
        <div>
          <textarea onChange={updatePostText} ref={textareaElement} value={props.postText}></textarea>
          <button onClick={newPost}>Add post</button>
        </div>
        {postsArr}
    </div>
  )
}
export default MyPosts;