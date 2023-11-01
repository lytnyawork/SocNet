import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    <div className={s.content__posts}>
        My posts
        <div>
           New posts
        </div>
        <Post likesCount='11'/>
        <Post likesCount='21'/>
       
    </div>

  )
}

export default MyPosts;