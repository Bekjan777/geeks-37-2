import React from 'react';
import classes from "./todo.module.css";
import Button from "../Button";

const Todo = ({todo, handleDelete}) => {
    return (
        <li className={classes.todo}>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            <p>completed: {todo.completed ? "выполнено" : "не выполнено"}</p>
            <Button onclick={() => {
                handleDelete(todo.id)
            }}>
                delete
            </Button>
        </li>
    );
};

export default Todo;