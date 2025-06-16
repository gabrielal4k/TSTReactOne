import { useState } from "react"


export default function Counter(){

    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);

    function handleIncrement(){
        setCount(count + incrementBy);
    }
    
    function handleDecrement(){
        setCount(count - incrementBy);
    }

    function increaseIncrement(){
        setIncrementBy(incrementBy + 1);
    }

     function decreaseIncrement(){
        setIncrementBy(incrementBy - 1);
    }

    return (
        <div>
            <h1>Counter:  {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>

            <h4>Increment By: {incrementBy}</h4>
            <button onClick={increaseIncrement}>Increase Increment</button>
            <button onClick={decreaseIncrement}>Decrease Increment</button>
        </div>
    );
};