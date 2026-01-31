import { useState } from "react";

export function CounterCuLimita() {
    const [count, setCount] = useState(0);

    function increment() {
        if (count < 10) {
            setCount(count + 1);
            console.log("Userul apasa +");
            
        }
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1);
            console.log("Userul apasa -");
        }
    }

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <hr />
        </div>
    )
}