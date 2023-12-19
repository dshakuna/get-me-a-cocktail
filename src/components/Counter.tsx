import {useState} from "react";

export function Counter () {
    const [count, setCount] = useState(0)
    const handleCountClick = () => {
        setCount(count+ 1)
    }

    return (
        <>
            <span>El contador es : {count}</span>
            <button onClick={handleCountClick}>contame</button>
        </>
    )
}