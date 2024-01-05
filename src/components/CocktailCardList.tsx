
import { Drink } from "../service/model/Drinks"
import { CocktailCard } from "./CocktailCard"

type Props = {
    cocktails: Drink[]
}

export function CocktailCardList({ cocktails }: Props) {
    return (
        <>
            {cocktails.map(cocktail => (
                <CocktailCard cocktail={cocktail} key={cocktail.idDrink} />
            ))}
        </>
    )
}


