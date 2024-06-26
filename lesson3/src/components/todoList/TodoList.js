import React from 'react';
import classes from "./todoList.module.css";
import Todo from "../todo/todo";

const TodoList = ({ list, handleDelete }) => {
    return (
        <>
            <ul className={classes.todo_list}>
                {
                    list.length > 0 ? list.map(item => (
                        <Todo key={item.id} todo={item} handleDelete={handleDelete} />
                    )) : `клава пуста`
                }
            </ul>
        </>
    );
};

export default TodoList;
