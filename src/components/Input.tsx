import {useState} from "react";

export function Input () {

    const [inputText, setInputText] = useState("")
    const handleOnInputChange = (evt) => {
        setInputText(evt.target.value)
    }

    return (
        <>
            <input name="name" placeholder="dame tu nombre" onChange={handleOnInputChange}/>
            <span>{inputText}</span>
        </>
    )
}