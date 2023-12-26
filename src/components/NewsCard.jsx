import React from 'react';
import { Link } from 'react-router-dom';

const placeholderImages = [
  'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/264425930/original/930064aa70b89e301e06c1ad37193011102bfdec/write-an-anime-article-of-your-choice.png',
  'https://th.bing.com/th/id/OIP.-9wbS4KOoXXDxyxQYW8q-wHaKm?rs=1&pid=ImgDetMain',
  'https://i.pinimg.com/736x/10/2f/47/102f475c1aba3b8b1d4d3ef187908412--dbz-manga-naruto-vs.jpg',
];

const NewsCard = ({ article }) => {
  const { article_id, title, image_url, pubDate, source} = article;
  const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];

  return (
    <Link to={{ pathname: `/article/${article_id}`, state: { article } }} className="card news-card">
      <img src={image_url || randomImage} alt={title} className="card-img-top news-image" />
      <div className="card-body news-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-text source">{source}</p>
        <p className="card-text published-date">{new Date(pubDate).toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default NewsCard;
