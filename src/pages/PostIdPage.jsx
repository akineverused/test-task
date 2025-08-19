import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import cl from '../styles/PostIdPage.module.css'
import Service from "../API/Service";
import CommentItem from "../components/UI/CommentItem/CommentItem";

const PostIdPage = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchComments = async () => {
            const response = await Service.getCommentsByPostId(postId);
            setComments(response);
        }
        const fetchPostData = async () => {
            const response = await Service.getPostById(postId);
            console.log(response)
            setPost(response[0]);
        }

        void fetchPostData();
        void fetchComments();
    }, [postId]);

    return (
        <div className={cl.wrap}>
            <div className={cl.upperPart}>
                <div className={cl.image}></div>
                <div className={cl.text}>
                    <p className={cl.title}>
                        {post.title}
                    </p>
                    <p className={cl.body}>
                        {post.body}
                    </p>
                </div>
            </div>
            {comments.map(comment =>
                <CommentItem
                    key={comment.id}
                    comment={comment}
                />
            )}
        </div>
    );
};

export default PostIdPage;