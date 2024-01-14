import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const searchParamName = 'queryParam';

export function CocktailFinder() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");

    const handleButtonClick = async (evt:any) => {
        evt.preventDefault();
        navigate(`/cocktails/search?${searchParamName}=${inputValue}`)
    };

    const handleOnChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(evt.target.value);
    };

    return (
        <form>
            <input placeholder="Find a drink" onChange={handleOnChangeInput} />
            <button type="submit" onClick={handleButtonClick}>Search</button>
        </form>
    );

}


