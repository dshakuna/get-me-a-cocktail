import { useEffect, useState } from "react";
import { getFavorites } from "../../service/favorite-cocktail";
import { Drink } from '../../service/model/Drinks';
import { Container } from "../../components/Container";
import { CocktailCardWithFavorite } from "../../components/CocktailCardWithFavorite";

export const FavoritesPage = () => {
    const [favorites, setFavorites] = useState<Drink[]>([]);
    const [lastUpdate, setLastUpdate] = useState(new Date()); // TODO: Hack para forzar re-render del component cuando se agrega o quita cocktail del local storage

    useEffect(() => {
        const loadFavorites = () => { // Aca no hay async / await por que getFavorites() no es async
            const fetchedFavorites = getFavorites();
            setFavorites(fetchedFavorites);
        };
        loadFavorites();
    }, [lastUpdate]);

    const handleOnFavoriteChange = () => {
        console.log(lastUpdate)
        setLastUpdate(new Date())
    }

    return (
        <>
            <Container>
                 <h2>Favorites</h2>
                <div className="row">
                    {favorites.map(cocktail => (
                        <CocktailCardWithFavorite key={cocktail.idDrink} cocktail={cocktail}  onFavoriteChange={handleOnFavoriteChange}/>
                    ))}
                </div>
            </Container>
        </>
    );
};
