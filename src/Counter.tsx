import {useState} from 'react'
import {Button} from "./Button.tsx";
import './App.css'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="counter">
            <div>
                <Button onClick={increment} disabled={count >= 5} name='Increment'>
                </Button>
                <Button onClick={reset} disabled={count === 0} name='Reset'>
                </Button>
            </div>
            <p style={{marginTop: '10px', fontSize: '40px'}}>
                Current count: <span className={count === 5 ? 'max-current' : ''}>
                  {count}
                </span>
            </p>
        </div>
    )
}
