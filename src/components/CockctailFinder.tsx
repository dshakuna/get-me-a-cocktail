import { useState } from "react";
import { Container } from "./Container";
import { getCocktailByName } from "../service/get-cocktail-by-name";
import { Drink } from "../service/model/Drinks";
import { CocktailCardList } from "./CocktailCardList";

export function CocktailFinder() {
    const [inputValue, setInputValue] = useState("");
    const [drinks, setDrinks] = useState<Drink[]>([]);

    const handleButtonClick = async () => {
        const result = await getCocktailByName(inputValue)
        setDrinks(result.drinks)
    }

    const handleOnChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(evt.target.value)
    }

    return (
        <Container>
            <input placeholder="Find a drink" onChange={handleOnChangeInput}/>
            <span>{inputValue}</span>
            <CocktailCardList cocktails={drinks}/>
            <button onClick={handleButtonClick}>Search</button>
        </Container>
    )
}