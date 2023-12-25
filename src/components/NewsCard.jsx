import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
    const { title, image_url, pubDate, source } = article;

    return (
        <Link to={`/article/${encodeURIComponent(title)}`} className="card news-card">
            {image_url && <img src={image_url} alt={title} className="card-img-top news-image" />}
            <div className="card-body news-details">
                <h3 className="card-title">{title}</h3>
                <p className="card-text source">{source}</p>
                <p className="card-text published-date">{new Date(pubDate).toLocaleString()}</p>
            </div>
        </Link>
    );
};

export default NewsCard;
