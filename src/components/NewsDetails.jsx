import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const NewsDetails = ({ apiKey, keywords }) => {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const articlesPerPage = 15;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                let apiUrl;
                if (keywords) {
                    apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${keywords}`;
                } else {
                    apiUrl = `https://newsdata.io/api/1/news?apikey=pub_3538878cb1f81c12426d02f635118ab11f95a&q=pizza`;
                }
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.status === 'success' && data.results && data.results.length > 0) {
                    const sortedNews = data.results.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
                    const calculatedTotalPages = Math.ceil(sortedNews.length / articlesPerPage);
                    setTotalPages(calculatedTotalPages);
                    const startIndex = (currentPage - 1) * articlesPerPage;
                    const endIndex = startIndex + articlesPerPage;
                    setNews(sortedNews.slice(startIndex, endIndex));
                } else {
                    setTotalPages(1);
                    setNews([]);
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();
    }, [apiKey, keywords, currentPage, articlesPerPage]);

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
                        {news.map((article, index) => (
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
                )}
        </div>
    );
};

export default NewsDetails;
