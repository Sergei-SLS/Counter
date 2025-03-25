import {useState} from 'react'
import {Button} from "./Button.tsx";
import './App.css'
import {CountDisplay} from "./CountDisplay.tsx";

const valueMin = 0;
const valueMax = 5;

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if (count < valueMax) {
            setCount(count + 1)
        }
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="counter">
            <div>
                <Button onClick={increment} disabled={count >= valueMax} name='Increment'>
                </Button>
                <Button onClick={reset} disabled={count === valueMin} name='Reset'>
                </Button>
            </div>
            <CountDisplay count={count} valueMax={valueMax} />
        </div>
    )
}
