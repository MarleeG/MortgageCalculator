import React from 'react';

import './Button.css'
const log = console.log;
const Button = props => {
    return <button type={props.type} className="button">
        {props.text}
    </button>
}

export default Button;