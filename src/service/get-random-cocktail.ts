import { Drink, DrinksData } from "./model/Drinks";


export async function getRandomCocktails(count: number): Promise<DrinksData> {
    let cocktails: Drink[] = [];
    for (let i = 0; i < count; i++) {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const data: DrinksData = await response.json();
        cocktails.push(data.drinks[0]);
    }
    return { drinks: cocktails };
}

  