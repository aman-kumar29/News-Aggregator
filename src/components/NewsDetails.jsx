import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { IconButton, Container, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import NewsCardSkeleton from './NewsCardSkeleton';

const NewsDetails = ({ apiKey, keywords }) => {
  const [news, setNews] = useState([]);
  const [nextPageCode, setNextPageCode] = useState(null);
  const [prevPageCode, setPrevPageCode] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let apiUrl;
        if (keywords) {
          apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${keywords}&language=en`;
        } else {
          apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=india&language=en`;
        }
        const response = await fetch(apiUrl);
        const data = await response.json();
        setNextPageCode(data.nextPage);
        console.log(apiUrl);
        if (data.status === 'success' && data.results && data.results.length > 0) {
          const sortedNews = data.results.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
          setNews(sortedNews.slice(0, 9)); // Update state with sorted news data
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
          apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${keywords}&language=en&page=${nextPageCode}`;
        } else {
          apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=india&language=en&page=${nextPageCode}`;
        }
        console.log(apiUrl);
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'success' && data.results && data.results.length > 0) {
          const sortedNews = data.results.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
          setNews(sortedNews.slice(0, 9));
          setPrevPageCode(nextPageCode);
          setNextPageCode(data.nextPage);
        } else {
          setPrevPageCode(nextPageCode);
          setNextPageCode(null);
        }
      }
    } catch (error) {
      console.error('Error fetching next page:', error);
    }
  };

  const handlePrevPage = async () => {
    // try {
    //   if (prevPageCode !== null) {
    //     let apiUrl;
    //     if (keywords) {
    //       apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${keywords}&language=en&page=${prevPageCode}`;
    //     } else {
    //       apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=india&language=en&page=${prevPageCode}`;
    //     }
    //     console.log(apiUrl);
    //     const response = await fetch(apiUrl);
    //     const data = await response.json();

    //     if (data.status === 'success' && data.results && data.results.length > 0) {
    //       const sortedNews = data.results.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    //       setNews(sortedNews.slice(0, 9));
    //       setNextPageCode(prevPageCode);
    //       setPrevPageCode(null);
    //     } else {
    //       setNextPageCode(prevPageCode);
    //     }
    //   }
    // } catch (error) {
    //   console.error('Error fetching next page:', error);
    // }
  };

  return (
    <Container className="news-container" sx={{ backgroundColor: '#f0f0f0' }}>
      <Typography variant="h4" sx={{ color: '#007BFF' }}>Latest News</Typography>
      {news.length > 0 ? (
        <>
          <Box className="news-cards" sx={{ marginTop: '16px' }}>
            {news.map((article) => (
              <NewsCard key={article.article_id} article={article} />
            ))}
          </Box>
          <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: prevPageCode ? 'space-between' : 'center' }}>
            {prevPageCode && (
              <IconButton onClick={handlePrevPage} sx={{ backgroundColor: '#007BFF', color: '#fff',marginLeft:'5%' }}>
                <ArrowBackIcon />
              </IconButton>
            )}
            {nextPageCode && (
              <IconButton onClick={handleNextPage} sx={{ backgroundColor: '#007BFF', color: '#fff',marginRight:'5%' }}>
                <ArrowForwardIcon />
              </IconButton>
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
