import { Drink } from "../service/model/Drinks"


type Props = {
    cocktail: Drink
}

export function CocktailDetailCard({ cocktail }: Props) {
    return (
        <div className="card">
            <img src={cocktail.strDrinkThumb + '/preview'} className="card-img-top" alt={cocktail.strDrink} />
            <div className="card-body">
                <h5 className="card-title">{cocktail.strDrink}</h5>
            </div>
        </div>
    )
}