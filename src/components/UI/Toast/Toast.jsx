import React from 'react';
import cl from './Toast.module.css'

const Toast = ({text, state}) => {
    return (
        <div className={`${cl.wrap} ${cl[state]}`}>
            {text}
        </div>
    );
};

export default Toast;