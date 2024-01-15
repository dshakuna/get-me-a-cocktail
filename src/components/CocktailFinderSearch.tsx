import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Drink } from "../service/model/Drinks";
import { getCocktailByName } from "../service/get-cocktail-by-name";
import { Spinner } from "react-bootstrap";
import { Container } from "./Container";
import { searchParamName } from "./CocktailFinder.tsx";
import { CocktailCardWithFavorite } from "./CocktailCardWithFavorite.tsx";

export function CocktailFinderSearch() {

    const [searchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const [cocktails, setCocktails] = useState<Drink[]>([])
    const [error, setError] = useState<string | undefined>()

    const query = searchParams.get(searchParamName) || ""

    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                // result.drinks != null ? result.drinks : []  -> ternary operator
                setIsLoading(true);
                const result = await getCocktailByName(query);
                setCocktails(result.drinks ?? []);
                setError(undefined)
            } catch (e) {
                const error = e as Error
                setError(error.message)
            } finally {
                setIsLoading(false);
            }
        };

        fetchCocktails();
    }, [query]);

    if (isLoading) {
        return <Spinner animation="border" />;
    }

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                Hubo un error invocando el api: {error}
            </div>
        )
    }

    return (
        <>
            <Container>
                <div className="row">
                    {
                        cocktails.length > 0
                            ? cocktails.map(cocktail => (
                                <CocktailCardWithFavorite key={cocktail.idDrink} cocktail={cocktail}/>
                            ))
                            : <span>No hay datos para: {query}</span>
                    }

                </div>
            </Container>
        </>
    )
}