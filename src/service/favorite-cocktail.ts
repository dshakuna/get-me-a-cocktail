import { Drink } from "./model/Drinks";

const STORAGE_KEY="favorites"; // CRUD Create, Retrieve, Update, Delete

export function saveFavoriteCocktail(cocktail: Drink): void {
    const existingFavorite = getFavoriteById(cocktail.idDrink)
    if(!existingFavorite) {
        const favs = getFavorites();
        const toSave = [...favs, cocktail]
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
    }
}

export function removeFromFavoriteCocktail(cocktailId: Drink["idDrink"]): void {
    const allFavs = getFavorites()
    const newFavs = allFavs.filter(favorito => favorito.idDrink !== cocktailId)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavs))
}

export function getFavorites(): Drink[] {
    const favsString = localStorage.getItem(STORAGE_KEY);
    if(favsString) {
        return JSON.parse(favsString)
    } else {
        return []
    }
}

export function getFavoriteById(cocktailId: Drink["idDrink"]): Drink | undefined {
    const allFavs = getFavorites();
    return allFavs.find(favorito => favorito.idDrink === cocktailId)
}


