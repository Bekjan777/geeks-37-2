import React from 'react';
import classes from './Button.module.css'
const Button = ({label, onclick}) => {
    return (
        <button className={classes.btn} onClick={onclick}>{label}</button>
    );
};

export default Button;