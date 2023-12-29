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

//Type e Interface funcionan muy similarmente y en general pueden ser usados inequivocamente

export type DrinksData = {
    drinks: Drink[];
}