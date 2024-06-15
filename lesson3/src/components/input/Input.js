import React from 'react';


const Input = ({onInput,onChange, placeholder, type='text'}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;