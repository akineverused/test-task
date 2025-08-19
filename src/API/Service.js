import axios from "axios";



export default class Service{
    static async getAllPosts(){
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return response.data;
        } catch (e) {
            return e.message;
        }
    }

    static async signIn(username){
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`)
            return response.data;
        } catch (e){
            return e.message;
        }
    }

    static async getPostById(postId){
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${postId}`);
            return response.data;
        } catch (e){
            return e.message;
        }
    }

    static async getCommentsByPostId(postId){
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            return response.data;
        } catch (e){
            return e.message;
        }
    }
}