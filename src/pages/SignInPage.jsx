import React, {useContext, useState} from 'react';
import cl from '../styles/SignInPage.module.css'
import Service from "../API/Service";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";
import {useToasting} from "../utils/utils";

const SignInPage = () => {
    const {setIsAuth, setUserData} = useContext(AuthContext);
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const {toasting} = useToasting();

    const handleTextChange = (e) => {
        setValue(e.target.value)
    }

    const signIn = async () => {
        const response = await Service.signIn(value);
        if (response.length){
            toasting('success', `Welcome back, ${value}!`)
            setUserData(response[0]);
            localStorage.setItem("isAuth", 'true');
            setIsAuth(true)
            navigate('/main');
        } else {
            toasting('error', 'No such username or incorrect')
        }
    }

    return (
        <div className={cl.wrap}>
            <div className={cl.window}>
                Sign in
                <div className={cl.buttons}>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => handleTextChange(e)}
                        placeholder={"Enter your name..."}
                    />
                    <button onClick={() => signIn()}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;