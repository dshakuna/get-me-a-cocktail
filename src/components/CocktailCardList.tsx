
import { Drink } from "../service/model/Drinks"
import { CocktailCard } from "./CocktailCard"
import { Container } from "./Container"

type Props = {
    cocktails: Drink[]
}

export function CocktailCardList({ cocktails }: Props) {
    return (
        <>
        <Container>
            {cocktails.map(cocktail => (
                <CocktailCard cocktail={cocktail} key={cocktail.idDrink} />
            ))}
        </Container>
        </>
    )
}


