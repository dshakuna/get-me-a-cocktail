type Props = {
    thumbnail: string;
    title: string;
}

export function CocktailCard({ thumbnail, title }: Props) {
    return (
        <div className="card">
            <img src={thumbnail + '/preview'} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
}