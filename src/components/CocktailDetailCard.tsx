import { Drink } from "../service/model/Drinks"

type Props = {
    cocktail: Drink
}

export function CocktailDetailCard({ cocktail }: Props) {
    return (
        <div className="col-md-12">
                <h2 className="card-title">{cocktail.strDrink}</h2>
                <img src={cocktail.strDrinkThumb + '/preview'} className="card-img-top" alt={cocktail.strDrink} />
                {cocktail.strInstructions && (
                <>
                    <h3>Instructions English</h3>
                    <p>{cocktail.strInstructions}</p>
                </>
            )}
            {cocktail.strInstructionsES && (
                <>
                    <h3>Instructiones Español</h3>
                    <p>{cocktail.strInstructionsES}</p>
                </>
            )}
            {cocktail.strInstructionsDE && (
                <>
                    <h3>Anweisungen Deutsch</h3>
                    <p>{cocktail.strInstructionsDE}</p>
                </>
            )}
            {cocktail.strInstructionsFR && (
                <>
                    <h3>Instructions Français</h3>
                    <p>{cocktail.strInstructionsFR}</p>
                </>
            )}
            {cocktail.strInstructionsIT && (
                <>
                    <h3>Istruzioni Italiano</h3>
                    <p>{cocktail.strInstructionsIT}</p>
                </>
            )}
        </div>
    )
}


