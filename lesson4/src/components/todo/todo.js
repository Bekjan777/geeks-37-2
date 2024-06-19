import React, {useState} from 'react';
import classes from "./todo.module.css";
import Button from "../Button";
import Input from "../input/Input";

const Todo = ({todo, handleDelete,handleDone,handleEdit, handleCurrentEdit, isEdit}) => {
    const [input, setInput] = useState(todo.title)
    return (
        <>

            <li className={`${classes.todo} ${todo.completed ? classes.active : ""}`}>
                <p>id: {todo.id}</p>
                <p>title: {todo.title}</p>
                <Button onclick={() => {
                    handleDelete(todo.id)
                }}>
                    delete
                </Button>
                <Button onclick={() => {
                    handleDone(todo.id)
                }}>
                    done
                </Button>
                <Button onclick={() => {
                    handleCurrentEdit(todo.id)
                }}>
                    edit
                </Button>
            </li>
            {
                isEdit && <div>
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)} placeholder={`name`}/>
                    <Button onclick={() => {
                        handleEdit(input,todo.id)
                    }}>Save</Button>
                    <Button onclick={() => {
                        handleCurrentEdit('')
                    }}>Cancel</Button>
                </div>
            }
        </>
    );
};

export default Todo;