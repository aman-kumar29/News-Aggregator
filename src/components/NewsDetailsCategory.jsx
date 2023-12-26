import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { Button, Container, Typography, Box } from '@mui/material';
import NewsCardSkeleton from './NewsCardSkeleton';

const NewsDetailsCategory = ({ apiKey, category }) => {
    const [news, setNews] = useState([]);
    const [nextPageCode, setNextPageCode] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                let apiUrl;
                let totalArticles = [];

                // Fetch articles until reaching at least 18
                while (totalArticles.length < 18 && nextPageCode !== null) {
                    if (category) {
                        apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${category}${nextPageCode ? `&page=${nextPageCode}` : ''}`;
                    } else {
                        apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=india&language=en${nextPageCode ? `&page=${nextPageCode}` : ''}`;
                    }

                    const response = await fetch(apiUrl);
                    const data = await response.json();

                    if (data.status === 'success' && data.results && data.results.length > 0) {
                        totalArticles = [...totalArticles, ...data.results];
                        setNextPageCode(data.nextPage);
                    } else {
                        setNextPageCode(null);
                    }
                }

                // Sort and set the news
                const sortedNews = totalArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
                setNews(sortedNews);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [apiKey, category, nextPageCode]);

    const handleNextPage = async () => {
        try {
            if (nextPageCode !== null) {
                let apiUrl;
                if (category) {
                    apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${category}&page=${nextPageCode}`;
                } else {
                    apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=india&language=en&page=${nextPageCode}`;
                }

                const response = await fetch(apiUrl);
                const data = await response.json();
                
                if (data.status === 'success' && data.results && data.results.length > 0) {
                    const sortedNews = data.results.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
                    setNews(sortedNews);
                    setNextPageCode(data.nextPage);
                } else {
                    setNextPageCode(null);
                }
            }
        } catch (error) {
            console.error('Error fetching next page:', error);
        }
    };

    return (
        <Container className="news-container" sx={{ padding: '16px', backgroundColor: '#f0f0f0' }}>
            <Typography variant="h4" sx={{ color: '#007BFF' }}>Latest News</Typography>
            {news.length > 0 ? (
                <>
                    <Box className="news-cards" sx={{ marginTop: '16px' }}>
                        {news.map((article) => (
                            <NewsCard key={article.article_id} article={article} />
                        ))}
                    </Box>
                    <Box sx={{ marginTop: '16px' }}>
                        {nextPageCode && (
                            <Button variant="contained" onClick={handleNextPage} sx={{ backgroundColor: '#007BFF', color: '#fff' }}>
                                Next Page
                            </Button>
                        )}
                    </Box>
                </>
            ) : (
                <>
                <Box className="news-cards" sx={{ marginTop: '16px' }}>
                    <NewsCardSkeleton/>
                    <NewsCardSkeleton/>
                    <NewsCardSkeleton/>
                    <NewsCardSkeleton/>
                    <NewsCardSkeleton/>
                    <NewsCardSkeleton/>
                </Box>
                </>
            )}
        </Container>
    );
};

export default NewsDetailsCategory;
