import React, {useEffect, useState} from 'react';
import Modal from "../../components/modal/Modal";
import Button from "../../components/Button";
import Input from "../../components/input/Input";
import TodoList from "../../components/todoList/TodoList";
import Pagination from "../../components/pagonation/Pagination";

const TodoPage = () => {
    const [show, setShow] = useState(false)
    const [regex, setRegex] = useState(/[a-zа-я]/gi)
    const [inputValue, setInputValue] = useState('')
    console.log(show, 'show');
    const [inputTask, setInputTask] = useState("")
    const [tasks, setTasks] = useState([])


    const HandleShow = () => {
        setShow(show => !show)
    }
    const handleChange = (event) => {
        console.log(event.target.value)
        setInputValue(event.target.value)
        console.log(event.target.value)
        setRegex(new RegExp(`${event.target.value}`, 'gi'))
        console.log(regex)
    }
    const handleChangeTask = (event) => {
        console.log(event.target.value)
        setInputTask(event.target.value)

    }

    const handleAdd = () => {
        setTasks(prev => ([...prev, {
            id: tasks.length>0 ? tasks[tasks.length-1].id+1 : 1,
            title: inputTask,
            completed: false
        }]))
        setInputTask("");
    }
    const handleDelete = (id) => {
        setTasks(prev =>
            prev.filter(item => item.id !== id))
    }

    const search = (task) => {
        return tasks.filter(task => task.title.match(regex))
    }

    const filtered = search()

    const handleDone = (id) => {

        tasks.map(task =>{
                if(task.id===id){
                    return task.completed= !task.completed
                }
            }
        )
        setTasks([...tasks])
    }
    const handleEdit = (title,id)  => {
        console.log(title)
        tasks.map(task =>{
                if(task.id===id){
                    return task.title= title
                }
            }
        )
        setTasks([...tasks])
    }
    const baseURL = `https://jsonplaceholder.typicode.com/`
    const API = "todos"
    const getApi = async (baseURL, API, limit, offset) => {
        const response = await fetch(`${baseURL}${API}/?_limit=${limit}&_start=${offset}`, {})
        const data = await response.json()
        return data

    }
    const [offset, setOffset] = useState(0);
    const limit = 10

    const page = Math.floor(offset/limit)+1
    const handlePrev = () => {
        return setOffset(prev => prev - offset)
    }
    const handleNext = () => {
        return setOffset(prev => prev + offset)
    }

    useEffect(() => {
        getApi(baseURL, API, limit, offset).then(data => setTasks(data));
    }, [offset]);
    return (
        <div>
            <Button onclick={HandleShow}>Open modal</Button>
            {
                show && <Modal action={HandleShow} handleAdd={handleAdd} handleChangeTask={handleChangeTask}>

                </Modal>

            }
            <Input placeholder={'напишите текст'} onChange={handleChange}/>
            <h1 style={{fontSize: '20px', color: 'red'}}> {inputValue}</h1>

            <TodoList handleEdit={handleEdit} handleDone={handleDone} list={filtered} handleDelete={handleDelete}/>
            <Pagination prev={handlePrev} next={handleNext} page={page}/>
        </div>
    );
};

export default TodoPage;