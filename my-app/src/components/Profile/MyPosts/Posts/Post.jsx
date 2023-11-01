import React from 'react';
import s from './Post.module.css';
import like from '../../../../images/like.com.png';

const Post = (props) => {
  return (
    <div className={s.item}>

      <div className={s.post__info}>
        <div className={s.avatar}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVZPeGxzWQV-F99LWiCd9mrZbkrYMtQvLWls9eeJhoCmcdyJzVDGTo2hRfkYBearwkVk&usqp=CAU" alt="" />
        </div>     



        <div className={s.l}>
            <div>
              <img className={s.like} src={like} alt="" />
            </div>
          <div>
            <span className={s.like__count}>{props.likesCount}</span>
          </div>
        </div>






      </div>
        <div className={s.post}>
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of
        type and scrambled it to make a type specimen book.
        </div>

       

    </div>
  )
}

export default Post;