import React from 'react';
import classes from './modal.module.css';
import Button from "../Button";
import Input from "../input/Input";

const Modal = ({action, handleChangeTask, handleAdd}) => {
    return (
        <>
            <div className={classes.modalWrapper} onClick={action}/>
            <div className={classes.modalContent}>
                <Button onclick={action}>Close modal</Button>
                <Input onChange={handleChangeTask} placeholder={'введите назвагте такса'}></Input>
                <Button onclick={handleAdd}>Add</Button>
            </div>
        </>
    );
};

export default Modal;