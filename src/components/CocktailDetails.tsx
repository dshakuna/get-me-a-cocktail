import {Drink, getRandomCocktail} from "../service/get-random-cocktail.ts";
import {useEffect, useState} from "react";
import {Spinner} from "react-bootstrap";

export function CocktailDetails(){
    const [isLoading, setIsLoading] = useState(false)
    const [randomCockatail, setRandomCockatail] = useState<Drink | undefined>()

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true)
            const result = await getRandomCocktail()
            setRandomCockatail(result.drinks[0])
            setIsLoading(false)
        }

        fetchData()
    }, [])

    if(isLoading) {
        return <Spinner/>
    }

    if (!isLoading && !randomCockatail) {
        return <h1>No HAY COCKTAIL</h1>
    }


    console.log({randomCockatail})

    return (
        <div className="card">
            <img src={randomCockatail?.strDrinkThumb} className="card-img-top"  alt="imagen" />
                <div className="card-body">
                    <h5 className="card-title">{randomCockatail?.strDrink}</h5>
                </div>
        </div>
    )
}