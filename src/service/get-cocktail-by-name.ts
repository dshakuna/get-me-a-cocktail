import { DrinksData } from "./model/Drinks";

export async function getCocktailByName(name:string): Promise<DrinksData> {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    return await response.json()
}