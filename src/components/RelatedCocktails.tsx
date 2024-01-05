// components/RelatedCocktails.tsx

import React, { useState, useEffect } from 'react';
import { getCocktailsByIngredient } from '../service/getCocktailsByIngredient'; // Asegúrate de que la ruta sea correcta
import { Drink } from '../service/model/Drinks';
import { CocktailCard } from './CocktailCard';

interface RelatedCocktailsProps {
    ingredient: string;
}

const RelatedCocktails: React.FC<RelatedCocktailsProps> = ({ ingredient }) => {
    const [cocktails, setCocktails] = useState<Drink[]>([]);

    useEffect(() => {
        const fetchCocktails = async () => {
            const fetchedCocktails = await getCocktailsByIngredient(ingredient);
            setCocktails(fetchedCocktails.drinks.slice(0, 3)); // Limita a 3 cócteles
        };

        fetchCocktails();
    }, [ingredient]);

    return (
        <div>
            <h3>Cócteles relacionados con {ingredient}</h3>
            <div className="row">
                {cocktails.map((cocktail: Drink) => (
                    <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
                ))}
            </div>
        </div>
    );
};

export default RelatedCocktails;
