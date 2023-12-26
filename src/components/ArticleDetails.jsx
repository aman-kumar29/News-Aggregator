// ArticleDetails.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const ArticleDetails = () => {
  const location = useLocation();
  const { article } = location.state || {};

  return (
    <div className="article-details-container">
      {article ? (
        <div className="article-details">
          <h1 className="article-title">{article.title}</h1>
          <p className="published-date">{article.pubDate}</p>
          {article.image_url && <img src={article.image_url} alt={article.title} className="article-image" />}
          <p className="article-content">{article.content}</p>
        </div>
      ) : (
        <p>No article data available.</p>
      )}
    </div>
  );
};

export default ArticleDetails;
