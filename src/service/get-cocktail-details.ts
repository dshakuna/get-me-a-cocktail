import { DrinksData } from "./model/Drinks";

export async function getCocktailDetails(cocktailId: string): Promise<DrinksData> {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`);
    return await response.json()
}