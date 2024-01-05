import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BlogCardProps {
    id: number; 
    title: string;
    content: string;
    date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, content, date }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/blog/${id}`);
    };

    return (
        <div className="col-md-4">
            <div className="card" onClick={handleCardClick}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <p className="card-text"><small className="text-muted">Publicado el {date}</small></p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
