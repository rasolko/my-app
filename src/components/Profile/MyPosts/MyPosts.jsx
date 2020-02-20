import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsArr = props.profilePage.posts.map( (p) => <Post message={p.message} like={p.like} />);
  let textareaElement = React.createRef();
  let OnNewPost = () => {
    props.newPost();
  }
  let onUpdatePostText = () => {
    props.updatePostText(textareaElement.current.value);
  }
  return (
    <div>
      My Posts
        <div>
          <textarea onChange={onUpdatePostText} ref={textareaElement} value={props.profilePage.postText}></textarea>
          <button onClick={OnNewPost}>Add post</button>
        </div>
        {postsArr}
    </div>
  )
}
export default MyPosts;