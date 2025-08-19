import React, {useContext} from 'react';
import cl from './Header.module.css'
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../context";
import Toast from "../Toast/Toast";

const Header = () => {
    const navigate = useNavigate();
    const {isAuth, setIsAuth, toastText, toastState, setUserData} = useContext(AuthContext);

    const handleLogOut = () => {
        navigate('/main');
        setIsAuth(false);
        setUserData({});
        localStorage.clear()
    }

    return (
        <div className={cl.wrap}>
            <h2
                className={cl.companyLogo}
                onClick={() => navigate('/main')}
            >
                Best Application
            </h2>
            {toastState && <Toast state={toastState} text={toastText}/>}
            {isAuth
                ? (
                    <button
                        className={cl.signInBtn}
                        onClick={() => handleLogOut()}
                    >
                        Log out
                    </button>
                ):(
                    <button
                        className={cl.signInBtn}
                        onClick={() => navigate('/sign-in')}
                    >
                        Sign in
                    </button>
                )}
        </div>
    );
};

export default Header;