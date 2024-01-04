import { getRandomCocktails } from "../service/get-random-cocktail.ts";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import '../styles/CocktailCard.scss';
import { CocktailCardList } from "./CocktailCardList.tsx";
import { CocktailFinder } from "./CockctailFinder.tsx";
import { Drink, DrinksData } from "../service/model/Drinks.ts";
import { getCocktailDetails } from "../service/get-cocktail-details.ts";
import { CocktailCard } from "./CocktailCard.tsx";

export function CocktailList() {
    const [isLoading, setIsLoading] = useState(false);
    const [cocktails, setCocktails] = useState<Drink[]>([]);
    const [frozenCocktail, setFrozenCocktail] = useState<DrinksData>({drinks: []});
    const [error, setError] = useState<string | undefined>()

    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                setIsLoading(true);
                const result = await getRandomCocktails(5);
                const frozenDrink = await getCocktailDetails("178365")
                console.log("frozen drink is :", frozenDrink)
                setFrozenCocktail(frozenDrink)
                setCocktails(result.drinks);
                setError(undefined)
            } catch (e) {
                const error = e as Error
                setError(error.message)
            } finally {
                setIsLoading(false);
            }
        };

        fetchCocktails();
    }, []);

    if (isLoading) {
        return <Spinner animation="border" />;
    }

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                Hubo un error invocando el api: {error}
            </div>
        )
    }

    if(cocktails.length === 0) {
        return <span>No hay datos</span>
    }

    const frozenDrink = frozenCocktail.drinks[0]
    return (
        <>
            <CocktailCardList cocktails={cocktails}/>
            <CocktailCard title={frozenDrink.strDrink} thumbnail={frozenDrink.strDrinkThumb}/>
            <CocktailFinder/>
        </>
    )
}
