import React, {useEffect, useState} from 'react';
import cl from '../styles/MainPage.module.css'
import Service from "../API/Service";
import PostItem from "../components/UI/PostItem/PostItem";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetch = async () =>{
            const response = await Service.getAllPosts();
            setPosts(response || []);
        }

        void fetch()
    }, [])

    return (
        <div className={cl.wrap}>
            <div className={cl.postsGrid}>
                {posts.map(post =>
                    <PostItem
                        key={post.id}
                        post={post}
                    />
                )}
            </div>
        </div>
    );
};

export default MainPage;