import { useState } from "react";
import { getCocktailByName } from "../service/get-cocktail-by-name";
import { useSearchContext } from './CocktailFinderSearch';

export function CocktailFinder() {
    const [inputValue, setInputValue] = useState("");
    const { setSearchResults } = useSearchContext();

    const handleButtonClick = async () => {
        const result = await getCocktailByName(inputValue);
        setSearchResults(result.drinks); 
    };

    const handleOnChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(evt.target.value);
    };

    return (
        <>
            <input placeholder="Find a drink" onChange={handleOnChangeInput} />
            <button onClick={handleButtonClick}>Search</button>
        </>
    );

}


