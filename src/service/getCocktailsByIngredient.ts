import { DrinksData } from "./model/Drinks";

export async function getCocktailsByIngredient(ingredient: string): Promise<DrinksData> {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    return await response.json();
}
