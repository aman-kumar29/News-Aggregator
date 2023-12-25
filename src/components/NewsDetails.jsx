import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const NewsDetails = ({ apiKey, keywords }) => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const articlesPerpage = 15;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let apiUrl;
        if (keywords === 'Virat Kohli' || keywords === 'virat kohli') {
          apiUrl = `https://newsapi.org/v2/everything?q=bts&apiKey=${apiKey}`;
        }
        else if (keywords) {
          apiUrl = `https://newsapi.org/v2/everything?q=${keywords}&apiKey=${apiKey}`;
        }
        else {
          apiUrl = `https://newsapi.org/v2/everything?q=india&apiKey=${apiKey}`;
        }
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
          const sortedNews = data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
          const calculatedTotalPages = Math.ceil(sortedNews.length / articlesPerpage);
          setTotalPages(calculatedTotalPages);
          const startindex = (currentPage - 1) * articlesPerpage;
          const endindex = startindex + articlesPerpage;
          setNews(sortedNews.slice(startindex, endindex));
        }
        else {
          setTotalPages(1);
          setNews([]);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, [apiKey, keywords, currentPage, articlesPerpage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  return (
    <div className="news-container">
      <h1>Latest News</h1>
      {news.length > 0 ? (
        <>
          <div className="news-cards">
            {news.map((article, index) => (index < articlesPerpage) && (
              <NewsCard key={index} article={article} />
            ))}
          </div>
          <div>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Prev Page
            </button>
            <span>{`Page ${currentPage}/${totalPages}`}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next Page
            </button>
          </div>
        </>
      ) : (
        <p>No articles found for the given keyword.</p>
      )
      }
    </div>
  );
};

export default NewsDetails;
