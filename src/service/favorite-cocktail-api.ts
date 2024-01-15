import Airtable from 'airtable';
import { Drink } from './model/Drinks';

const base = new Airtable({ apiKey: 'patodiGXLeuJLYf4K.bac08ca17a56d72f8b2f24b491e7e5f7eafa5eee01b549787b6c2efe900ee30a' }).base('app7ObcmVawOfvaDk');

const FAVORITE_TABLE = 'favorites'

interface Favorite {
    IdDrink: string;
    Name: string;
    Thumbnail: string;
}

export async function saveFavoriteCocktail(cocktail: Drink): Promise<void> {
    const isFavorite = await getFavoriteById(cocktail.idDrink)
    if (!isFavorite) {
        base(FAVORITE_TABLE).create([
            {
                "fields": {
                    "Name": cocktail.strDrink,
                    "Thumbnail": cocktail.strDrinkThumb,
                    "IdDrink": cocktail.idDrink
                }
            },
        ], function (err, records) {
            if (err) {
                console.error(err);
                return;
            }
            //@ts-ignore
            records.forEach(function (record) {
                console.log(record.getId());
            });
        });
    }
}

export async function getFavoriteById(cocktailId: Drink["idDrink"]): Promise<Favorite | undefined> {
    const records = await base(FAVORITE_TABLE).select({
        filterByFormula: `{IdDrink} = '${cocktailId}'`,
        maxRecords: 1
    }).firstPage();

    // Check if any record is found
    if (records.length > 0) {
        const record = records[0];
        const favorite: Favorite = {
            IdDrink: record.get('IdDrink') as string,
            Name: record.get('Name') as string,
            Thumbnail: record.get('Thumbnail') as string
        };

        return favorite;
    } else {
        return undefined;
    }
}