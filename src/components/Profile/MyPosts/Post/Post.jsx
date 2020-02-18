import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLdepFN3QXHLmjCqf9WORlRe9Zd_VP8HMmyXtNt59B6h7QI5Mo'></img>
            {props.message}
            <div>
                <span>Like {props.like}</span>
            </div>

        </div>
    )
}
export default Post;