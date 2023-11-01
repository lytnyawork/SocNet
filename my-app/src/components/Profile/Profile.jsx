import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={s.content}>
        <div>
          <img src="#" alt="Avatar" />
        </div>
        <div>
            ava + descript
        </div>
        < MyPosts/>
    </div>
  );
}

export default Profile;