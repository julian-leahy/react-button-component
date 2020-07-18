import React from 'react';
import './button.styles.scss';

const Button = ({ children, theme, ...rest }) => {
    return (
        <button type={type} className={`btn btn__${theme}`} {...rest} >
            {children}
        </button>
    )
}

export default Button;