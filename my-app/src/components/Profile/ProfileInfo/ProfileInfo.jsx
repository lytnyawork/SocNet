import React from 'react';
import s from './ProfileInfo.module.css';
import avatar from '../../../images/ProfileAva3.jpg'

const ProfileInfo = (props) => {
  return (
    <div className={s.info}>
      <div>
        <img className={s.avatar} src={avatar} alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.user__name}>
          {props.FirstName} {props.LastName} 
        </div>

        <div className={s.description}>
          {props.description}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;