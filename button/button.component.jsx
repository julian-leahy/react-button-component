import React from 'react';
import './button.styles.scss';

const Button = ({ children, type = 'button', theme }) => {
    return (
        <button type={type} className={`btn btn__${theme}`}>
            {children}
        </button>
    )
}

export default Button;