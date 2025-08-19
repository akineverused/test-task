import React from 'react';
import cl from './CommentItem.module.css'
import avatar from '../../../Assets/Avatar.svg'

const CommentItem = ({comment}) => {
    return (
        <div className={cl.wrap}>
            <img src={avatar} alt={"ava"}/>
            <div className={cl.comment}>
                <p className={cl.email}>
                    {comment.email}
                </p>
                <p className={cl.commentBody}>
                    {comment.body}
                </p>
            </div>
        </div>
    );
};

export default CommentItem;