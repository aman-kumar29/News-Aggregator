import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetails = ({ apiKey }) => {
    const [article, setArticle] = useState(null);
    const { id } = useParams();
    const decodedId = decodeURIComponent(id);

    useEffect(() => {
        const fetchArticleDetails = async () => {
            try {
                const apiUrl = `https://newsdata.io/api/1/news?apikey=pub_3538878cb1f81c12426d02f635118ab11f95a&q=pizza`;
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data && data.length > 0) {
                    setArticle(data[0]);
                }
            } catch (error) {
                console.error('Error fetching article details:', error);
            }
        };

        fetchArticleDetails();
    }, [apiKey, decodedId]);

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
                <p>Loading article details...</p>
            )}
        </div>
    );
};

export default ArticleDetails;
