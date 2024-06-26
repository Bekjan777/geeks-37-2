import React, { useEffect, useState } from 'react';
import TodoList from '../../components/todoList/TodoList';
import Input from '../../components/input/Input';
import Button from '../../components/Button';
import Modal from '../../components/modal/Modal';
import Pagination from "../../components/pagonation/Pagination";
import Select from "react-select";

const TodoPage = () => {
    const [show, setShow] = useState(false);
    const [inputTask, setInputTask] = useState('');
    const [regex, setRegex] = useState('');
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [true_, setTrue_] = useState(false);
    const [offset, setOffset] = useState(0);
    const limit = 10;
    const BASE_URL = 'https://jsonplaceholder.typicode.com/';
    const API = 'todos';

    const HandleShow = () => {
        setShow(!show);
    };

    const handleChangeSearch = (event) => {
        setRegex(event.target.value);
    };

    const handleChangeTask = (event) => {
        setInputTask(event.target.value);
    };

    const handleAdd = () => {
        const newTask = {
            id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
            title: inputTask,
            completed: false
        };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
    };

    const handleDone = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
    };

    const handleEdit = (text) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === text.id) {
                task.title = text.title;
            }
            return task;
        });
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
    };

    const handleDelete = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
    };

    const searchTask = () => {
        return filteredTasks.filter(task => task.title.match(regex)) || [];
    };

    const getApi = async (shouldFetch) => {
        if (!shouldFetch) {
            const response = await fetch(`${BASE_URL}${API}/?_limit=${limit}&_start=${offset}`);
            const data = await response.json();
            setTasks(data);
            setFilteredTasks(data);
        } else {
            setTasks([]);
            setFilteredTasks([]);
        }
    };

    useEffect(() => {
        const trueFromLocalStorage = JSON.parse(localStorage.getItem('true_'));
        if (trueFromLocalStorage) {
            setTrue_(trueFromLocalStorage);
        } else {
            getApi(false);
        }
    }, [offset]);

    const page = Math.floor(offset / limit) + 1;

    const handlePrev = () => {
        setOffset(prev => prev - limit);
    };

    const handleNext = () => {
        setOffset(prev => prev + limit);
    };

    const deleteAllTasks = () => {
        setTasks([]);
        setFilteredTasks([]);
        localStorage.clear();
        setTrue_(true);
        localStorage.setItem('true_', JSON.stringify(true));
    };

    const options = [
        { value: "all", label: "All tasks" },
        { value: "uncompleted", label: "Uncompleted" },
        { value: "completed", label: "Completed" }
    ];

    const handleChangeSelect = (selectedOption) => {
        switch (selectedOption.value) {
            case "uncompleted":
                setFilteredTasks(tasks.filter(task => !task.completed));
                break;
            case "completed":
                setFilteredTasks(tasks.filter(task => task.completed));
                break;
            default:
                setFilteredTasks(tasks);
                break;
        }
    };

    return (
        <>
            <Select onChange={handleChangeSelect} options={options} />
            <Input placeholder={'поиск'} onChange={handleChangeSearch} />

            <Button onclick={HandleShow}>Open modal</Button>
            {show && (
                <Modal
                    action={HandleShow}
                    handleChangeTask={handleChangeTask}
                    handleAdd={handleAdd}
                />
            )}
            <TodoList
                list={searchTask()}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
            />
            <Pagination true_={true_} prev={handlePrev} next={handleNext} page={page} />

            <Button onclick={deleteAllTasks}>delete all tasks</Button>
        </>
    );
};

export default TodoPage;
