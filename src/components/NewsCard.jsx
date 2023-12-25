import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
  const { title, urlToImage, publishedAt, source } = article;

  return (
    <Link to={`/article/${encodeURIComponent(title)}`} className="card news-card">
      {urlToImage && <img src={urlToImage} alt={title} className="card-img-top news-image" />}
      <div className="card-body news-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-text source">{source.name}</p>
        <p className="card-text published-date">{new Date(publishedAt).toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default NewsCard;
