import { Drink } from "../service/model/Drinks";
import { useNavigate } from "react-router-dom";

type Props = {
    cocktail: Drink;
}

export function CocktailCard({ cocktail }: Props) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/cocktails/${cocktail.idDrink}`);
    }

    return (
        <div className="col-md-4">
            <div onClick={handleClick} style={{ cursor: 'pointer' }}>
                <img src={cocktail.strDrinkThumb + '/preview'} className="card-img-top" alt={cocktail.strDrink} />
                <div className="card-body">
                    <h5 className="card-title">{cocktail.strDrink}</h5>
                </div>
            </div>
        </div>
    );
}
