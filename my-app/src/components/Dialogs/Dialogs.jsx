import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) =>{
  return(
    <div className={s.item__A}>
           <NavLink to={"/dialogs/" + props.id} className = { navData => navData.isActive ? s.active : s.item } >{props.name}</NavLink>
          </div>
  )
}

const Message = (props) =>{
  return(
    <div className={s.mes}>{props.message}</div>
  )
}



const Dialogs = (props) => {
  return (
    <div>
      <div className={s.dialog}>
        <div className={s.dialog__item}>
          
          < DialogItem name='Kirill' id="1"/>

          < DialogItem name='Dima' id="2"/>

          < DialogItem name='Roma' id="3"/>

          < DialogItem name='Varya' id="4"/>

          < DialogItem name='Nikita' id="5"/>

          < DialogItem name='Pasha' id="6"/>

        </div>
        <div className={s.messages}>
          < Message message='Hi'/>
          < Message message='How are you?'/>
          < Message message='Bro'/>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
