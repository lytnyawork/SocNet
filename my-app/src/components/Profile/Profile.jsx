import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={s.content}>

        < ProfileInfo FirstName='Kirill' LastName='Lytnya' description="A wonderful young man searching for his destiny"/>

        < MyPosts/>
        
    </div>
  );
}

export default Profile;