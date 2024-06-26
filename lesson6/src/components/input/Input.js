import React from 'react';


const Input = ({value ,onChange, placeholder, type='text'}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
};

export default Input;