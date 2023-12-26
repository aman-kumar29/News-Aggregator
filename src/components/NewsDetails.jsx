import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import {Button, Container, Typography, Box } from '@mui/material';
import NewsCardSkeleton from './NewsCardSkeleton';

const NewsDetails = ({ apiKey, keywords }) => {
  const [news, setNews] = useState([]);
  const [nextPageCode, setNextPageCode] = useState(null);


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
          setNews(sortedNews.slice(0,9));  // Update state with sorted news data
        } else {
          setNews([]);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [apiKey, keywords]);
  const handleNextPage = async () => {
    try {
        if (nextPageCode !== null) {
            let apiUrl;
            if (keywords) {
                apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${keywords}&page=${nextPageCode}`;
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
            <NewsCardSkeleton />
            <NewsCardSkeleton />
            <NewsCardSkeleton />
            <NewsCardSkeleton />
            <NewsCardSkeleton />
            <NewsCardSkeleton />
          </Box>
        </>
      )}
    </Container>
  );
};

export default NewsDetails;