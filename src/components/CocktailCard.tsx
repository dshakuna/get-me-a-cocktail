import { useNavigate } from "react-router-dom";

type Props = {
    cocktailId: string;
    thumbnail: string;
    title: string;
}

export function CocktailCard({ cocktailId, thumbnail, title }: Props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/cocktails/${cocktailId}`)
    }

    return (
        <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <img src={thumbnail + '/preview'} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>

    )
}