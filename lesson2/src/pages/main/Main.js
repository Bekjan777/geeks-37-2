import React, {useState} from 'react';
import User from '../../components/user/User';
import Content from '../../components/content/content';
import Example from '../../components/example/Example';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';
import Button from "../../components/Button";
import List from "../../components/list/list";


const Main = () => {
    const [show, setShow] = useState(false)
    const [inputValue, setInputValue] = useState('')
    console.log(show, 'show');
    const tasks = [
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: true
        },
        {
            id: 3,
            title: 'sleep',
            completed: false
        },
        {
            id: 4,
            title: 'exercise',
            completed: true
        },
        {
            id: 5,
            title: 'read',
            completed: false
        },
        {
            id: 6,
            title: 'write',
            completed: true
        },
        {
            id: 7,
            title: 'study',
            completed: false
        },
        {
            id: 8,
            title: 'work',
            completed: false
        },
        {
            id: 9,
            title: 'shop',
            completed: true
        },
        {
            id: 10,
            title: 'relax',
            completed: false
        }
    ];


    const HandleShow = () => {
        setShow(!show)
    }
    const handleChange = (event) => {
        console.log(event.target.value)
        setInputValue(event.target.value)
        console.log(event.target.value)
    }
    return (
        <>
            <h1>hello</h1>

            <User name={'Bakyt'} age={18} phone={468465165146}/>
            <Content text={'Bakyt'} number={18} boolean={true}/>
            <Example>
                <p style={{color: 'yellowgreen'}}>Bakyt</p>
            </Example>
            <Button onclick={HandleShow}>Open modal</Button>
            {
                show && <Modal action={HandleShow}>
                    content
                </Modal>
            }
            <Input placeholder={'напишите текст'} onChange={handleChange}/>
            <Input placeholder={'напишите текст'} onChange={handleChange}/>
            <Input placeholder={'напишите текст'} onChange={handleChange}/>
            <Input placeholder={'напишите текст'} onChange={handleChange}/>
            <Input placeholder={'напишите текст'} onChange={handleChange}/>
            <h1 style={{fontSize: '20px', color: 'red'}}> {inputValue}</h1>



            <List list={tasks}/>



        </>
    );
};

export default Main;
