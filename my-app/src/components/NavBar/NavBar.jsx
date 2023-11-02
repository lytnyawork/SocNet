import React, { Component } from 'react'
import s from './NavBar.module.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={s.nav}>

        <div className={s.nav__text}>

          <div className={s.item__A}>
            <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item } >Profile</NavLink>
          </div>
          <div className= {s.item__A} >
            <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item } >Messages</NavLink>
          </div>
          
          <div className={s.item__A}>
            <a >News</a>
          </div>
          
          <div className={s.item__A}>
            <a  >Music</a>
          </div>

          <div className={s.item__A}>
            <a >Settings</a>
          </div>
                   
        </div>
    </nav>
  );
}

export default NavBar;