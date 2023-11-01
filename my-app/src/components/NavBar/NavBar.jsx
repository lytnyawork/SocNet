import React from 'react';
import s from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={s.nav}>

        <div className={s.nav__text}>

          <div className={s.item}>
            <a href="/profile">Profile</a>
          </div>
          <div className={s.item}>
            <a href="/dialogs">Messages</a>
          </div>
          
          <div className={s.item}>
            <a href="">News</a>
          </div>
          
          <div className={s.item}>
            <a href="">Music</a>
          </div>

          <div className={s.item}>
            <a href="">Settings</a>
          </div>
                   
        </div>
    </nav>
  );
}

export default NavBar;