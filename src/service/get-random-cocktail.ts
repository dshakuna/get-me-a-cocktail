export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: null | string;
    strTags: null | string;
    strVideo: null | string;
    strCategory: string;
    strIBA: null | string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsES: string;
    strInstructionsDE: string;
    strInstructionsFR: null | string;
    strInstructionsIT: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: null | string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: null | string;
    strImageSource?:  string;
    strImageAttribution: null | string;
    strCreativeCommonsConfirmed: string;
    dateModified: string;
}

interface DrinksData {
    drinks: Drink[];
}

export async function getCocktailByName(name:string) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    return await response.json()
}

export async function getRandomCocktails(count: number): Promise<DrinksData> {
    let cocktails: Drink[] = [];
    for (let i = 0; i < count; i++) {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const data: DrinksData = await response.json();
        cocktails.push(data.drinks[0]);
    }
    return { drinks: cocktails };
}

  