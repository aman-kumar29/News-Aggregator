import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { IconButton, Container, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import NewsCardSkeleton from './NewsCardSkeleton';

const NewsDetails = ({ apiKey, keywords, category, country, timeframe, language }) => {
  const [news, setNews] = useState([]);
  const [nextPageCode, setNextPageCode] = useState(null);
  const [prevPageCode, setPrevPageCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        setTimeout(async () => {
        let apiUrl;
        if (keywords) {
          apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${keywords}`;
        } else {
          apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=india`;
        }
        if(language){
          apiUrl+=`&language=${language}`
        }
        else{
          apiUrl+=`&language=en`
        }
        if(category){
          apiUrl+=`&category=${category}`
        }
        if(country){
          apiUrl+=`&country=${country}`
        }
        else{
          apiUrl+=`&country=in`
        }
        if(timeframe){
          apiUrl+=`&timeframe=${timeframe}`
        }
        console.log(apiUrl);
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
        setIsLoading(false);
      },1000);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [apiKey, keywords, category, country, timeframe, language]);

  const handleNextPage = async () => {
    try {
      setIsLoading(true);
      setTimeout(async () => {
      if (nextPageCode !== null) {
        let apiUrl;
        if (keywords) {
          apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${keywords}&page=${nextPageCode}`;
        } else {
          apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=india&page=${nextPageCode}`;
        }
        if(language){
          apiUrl+=`&language=${language}`
        }
        else{
          apiUrl+=`&language=en`
        }
        if(category){
          apiUrl+=`&category=${category}`
        }
        if(country){
          apiUrl+=`&country=${country}`
        }
        else{
          apiUrl+=`&country=in`
        }
        if(timeframe){
          apiUrl+=`&timeframe=${timeframe}`
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
      setIsLoading(false);
    },1000);
    } catch (error) {
      console.error('Error fetching next page:', error);
    }
  };

  const handlePrevPage = async () => {
    // try
  };

  return (
    <Container className="news-container" sx={{ backgroundColor: '#F7F7F7', fontFamily: 'Georgia, serif' }}>
      <Typography variant="h3" sx={{ color: '#393E46', paddingBottom: '30px', paddingTop: '10px' }}>Latest News</Typography>
      {isLoading ? (
        <Box className="news-cards" sx={{ marginTop: '16px' }}>
          {/* Render loading skeletons */}
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <NewsCardSkeleton key={index} />
          ))}
        </Box>
      ) : (
        news.length > 0 ? (
          <>
            <Box className="news-cards" sx={{ marginTop: '16px' }}>
              {news.map((article) => (
                <NewsCard key={article.article_id} article={article} />
              ))}
            </Box>
            <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: prevPageCode ? 'space-between' : 'center' }}>
              {prevPageCode && (
                <IconButton onClick={handlePrevPage} sx={{ backgroundColor: '#393E46', color: '#fff', marginLeft: '5%' }}>
                  <ArrowBackIcon />
                </IconButton>
              )}
              {nextPageCode && (
                <IconButton onClick={handleNextPage} sx={{ backgroundColor: '#393E46', color: '#fff', marginRight: '5%' }}>
                  <ArrowForwardIcon />
                </IconButton>
              )}
            </Box>
          </>
        ) : (
          <div>No articles found</div>
        )
      )}
    </Container>
  );  
}
export default NewsDetails;
