import React, {useState} from 'react';
import classes from "./todoList.module.css";
import Todo from "../todo/todo";

const TodoList = ({ list, handleDelete,handleDone , handleEdit}) => {
    const [currentEdit, setCurrentEdit] = useState()
    return (
        <>
            <ul className={classes.todo_list}>
                {
                    list.length > 0 ? list.map(item => (
                        <Todo key={item.id} handleCurrentEdit={setCurrentEdit} isEdit={currentEdit===item.id} handleEdit={handleEdit} handleDone={handleDone} todo={item} handleDelete={handleDelete} />
                    )) : `клава пуста`
                }
            </ul>
        </>
    );
};

export default TodoList;
