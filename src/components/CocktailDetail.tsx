import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCocktailDetails } from "../service/get-cocktail-details";
import { useEffect, useState } from "react";
import { DrinksData } from "../service/model/Drinks";
import { CocktailDetailCard } from "./CocktailDetailCard";
import CocktailNavbar from './CocktailNavbar'; 

export function CocktailDetail() {
    const { cocktailId } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [cocktail, setCocktail] = useState<DrinksData>({ drinks: [] });
    const [error, setError] = useState<string | undefined>()

    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                setIsLoading(true);
                const cocktail = await getCocktailDetails(cocktailId!)
                setCocktail(cocktail)
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
                Hubo u invocando el api: {error}
            </div>
        )
    }

    if (cocktail.drinks.length === 0) {
        return (
            <div className="alert alert-warning" role="alert">
                No existe el cocktail: {cocktailId}
            </div>
        )
    }

    return (
        <>
            <CocktailNavbar />
            <CocktailDetailCard cocktail={cocktail.drinks[0]} />
        </>
    )
   
}