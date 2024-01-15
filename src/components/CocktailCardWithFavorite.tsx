import { useState } from "react";
import { getFavoriteById, removeFromFavoriteCocktail, saveFavoriteCocktail } from "../service/favorite-cocktail";
import { Drink } from "../service/model/Drinks";
import { CocktailCard } from "./CocktailCard";

type Props = {
    cocktail: Drink;
    onFavoriteChange?: () => void
}

export function CocktailCardWithFavorite({ cocktail, onFavoriteChange }: Props) {
    const [lastUpdate, setLastUpdate] = useState(new Date()); // TODO: Hack para forzar re-render del component cuando se agrega o quita cocktail del local storage

    console.log(lastUpdate)
    const isFavoriteCocktail = getFavoriteById(cocktail.idDrink);

    const handleOnAddToFavoriteClick = () => {
        saveFavoriteCocktail(cocktail)
        setLastUpdate(new Date())
        onFavoriteChange && onFavoriteChange()
    }

    const handleOnRemoveFromFavoriteClick = () => {
        removeFromFavoriteCocktail(cocktail.idDrink)
        setLastUpdate(new Date())
        onFavoriteChange && onFavoriteChange()
    }

    return (
        <div className="col-md-4">
        {
            !isFavoriteCocktail ?
                <button onClick={handleOnAddToFavoriteClick}>Add to Favourite</button> :
                <button onClick={handleOnRemoveFromFavoriteClick}>Remove from Favourite</button>
        }
            <CocktailCard cocktail={cocktail}/>
        </div>
    )
}