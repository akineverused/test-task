import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import cl from './styles/App.module.css'
import Header from "./components/UI/Header/Header";
import {AuthContext} from "./context";

const App = () => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') === 'true');
    const [toastState, setToastState] = useState('');
    const [toastText, setToastText] = useState('');
    const [userData, setUserData] = useState({});

    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth,
            toastState, setToastState,
            toastText, setToastText,
            userData, setUserData
        }}>
            <BrowserRouter>
                <div className={cl.appWrapper}>
                    <Header/>
                    <AppRouter/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;