
import { Drink } from "../service/model/Drinks"
import { CocktailCard } from "./CocktailCard"
import { Container } from "./Container"

type Props = {
    cocktails: Drink[]
}

export function CocktailCardList({ cocktails }: Props) {

    return (
        <Container>
            {cocktails.map(cocktail => (
                <CocktailCard thumbnail={cocktail.strDrinkThumb} title={cocktail.strDrink} cocktailId={cocktail.idDrink} key={cocktail.idDrink} />
            ))}
        </Container>
    )
}