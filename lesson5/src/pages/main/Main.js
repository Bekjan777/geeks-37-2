import React, {useEffect, useState} from 'react';
import User from '../../components/user/User';
import Content from '../../components/content/content';
import Example from '../../components/example/Example';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';
import Button from "../../components/Button";
// import List from "../../components/list/list";
import TodoList from "../../components/todoList/TodoList";
import Counter from "../counter/Counter";
import user from "../../components/user/User";


const Main = () => {

    return (
        <>
            <h1>hello</h1>

            <User name={'Bakyt'} age={18} phone={468465165146}/>
            <Content text={'Bakyt'} number={18} boolean={true}/>
            <Example>
                <p style={{color: 'yellowgreen'}}>Bakyt</p>
            </Example>





            <Counter/>


        </>
    );

};

export default Main;
