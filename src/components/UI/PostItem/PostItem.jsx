import React from 'react';
import cl from './PostItem.module.css'
import {useNavigate} from "react-router-dom";

const PostItem = ({post}) => {
    const navigate = useNavigate();

    return (
        <div
            className={cl.wrap}
            onClick={()=>navigate(`/posts/${post.id}`)}
        >
            <div className={cl.image}></div>
            <h1 className={cl.title}>{post.title.length >20? post.title.slice(0, 17) + '...' : post.title}</h1>
            <h1 className={cl.title}>{post.body.length >40? post.body.slice(0, 37) + '...' : post.body}</h1>
        </div>
    );
};

export default PostItem;