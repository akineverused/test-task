import MainPage from "../pages/MainPage";
import SignInPage from "../pages/SignInPage";
import PostIdPage from "../pages/PostIdPage";


export const routes = [
    {path: '/main', component:<MainPage/>},
    {path: '/sign-in', component:<SignInPage/>},
    {path: '/posts/:postId', component:<PostIdPage/>},
]