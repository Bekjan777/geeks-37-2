import React, {useState} from 'react';
import Button from "../../components/Button";

const Counter = () => {
    const [count, setCount] = useState(0)
    const dec = () => {
        if(count > 0) setCount(count-1)
    }
    const inc = () => {
        setCount(count+1)
    }
    return (
        <div>
            <p>Count: {count}</p>
            <Button onclick={
                inc
            }>Increment</Button>
            <Button onclick={
                dec
            }>Decrement</Button>
        </div>
    );
};

export default Counter;