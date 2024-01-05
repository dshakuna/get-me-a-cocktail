import { getRandomCocktails } from "../service/get-random-cocktail.ts";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import '../styles/CocktailCard.scss';
import { CocktailCardList } from "./CocktailCardList.tsx";
import { Drink } from "../service/model/Drinks";
import CocktailNavbar from './CocktailNavbar'; 


export function CocktailList() {
    const [isLoading, setIsLoading] = useState(false);
    const [cocktails, setCocktails] = useState<Drink[]>([]);
    const [error, setError] = useState<string | undefined>()

    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                setIsLoading(true);
                const result = await getRandomCocktails(6);
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

    return (
        <>
            <CocktailNavbar />
            <CocktailCardList cocktails={cocktails}/>    
        </>
    )
}

