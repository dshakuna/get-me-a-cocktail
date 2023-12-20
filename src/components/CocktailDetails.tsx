import { Drink, getRandomCocktails } from "../service/get-random-cocktail.ts";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import '../styles/CocktailCard.scss';

export function CocktailDetails() {
    const [isLoading, setIsLoading] = useState(false);
    const [cocktails, setCocktails] = useState<Drink[]>([]);

    useEffect(() => {
        const fetchCocktails = async () => {
            setIsLoading(true);
            const result = await getRandomCocktails(5);
            setCocktails(result.drinks);
            setIsLoading(false);
        };

        fetchCocktails();
    }, []);

    if (isLoading) {
        return <Spinner animation="border" />;
    }

    return (
        <div className="cocktail-container">
            {cocktails.map(cocktail => (
                <div key={cocktail.idDrink} className="card">
                    <img src={cocktail.strDrinkThumb + '/preview'} className="card-img-top" alt={cocktail.strDrink} />
                    <div className="card-body">
                        <h5 className="card-title">{cocktail.strDrink}</h5>
                        {/* Más detalles aquí */}
                    </div>
                </div>
            ))}
        </div>
    );
}
