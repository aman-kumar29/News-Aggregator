import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Pagination, Box } from "@mui/material";
import { motion } from "framer-motion";

import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCardSkeleton";

const PAGE_SIZE = 9;
const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function NewsDetails({
  apiKey,
  keywords,
  category,
  country,
  timeframe,
  language,
}) {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const buildUrl = (token = "") => {
    const params = new URLSearchParams({ apikey: apiKey });
    params.append("q", keywords || "india");
    params.append("language", language || "en");
    if (category) params.append("category", category);
    params.append("country", country || "in");
    if (timeframe) params.append("timeframe", timeframe);
    if (token) params.append("page", token);
    return `https://newsdata.io/api/1/news?${params.toString()}`;
  };

  const fetchNews = async (token = "") => {
    setLoading(true);
    const res = await fetch(buildUrl(token));
    const data = await res.json();
    if (data.status === "success") {
      setNews(
        data.results
          .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
          .slice(0, PAGE_SIZE)
      );
      setNextPageToken(data.nextPage ?? null);
    }
    setLoading(false);
  };

  // Initial + query change
  useEffect(() => {
    setPage(1);
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywords, category, country, timeframe, language]);

  // Pagination (newsdata uses opaque tokens, so page numbers are faux; we just step next/prev)
  const handleChange = (_e, value) => {
    if (value > page && nextPageToken) {
      fetchNews(nextPageToken);
    } else if (value < page) {
      // quick client‑side back (history stack could be improved)
      fetchNews();
    }
    setPage(value);
  };

  return (
    <motion.div
      variants={fadeVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Latest News
        </Typography>

        {loading ? (
          <Grid container spacing={3}>
            {Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <NewsCardSkeleton />
              </Grid>
            ))}
          </Grid>
        ) : news.length ? (
          <>
            <Grid container spacing={3}>
              {news.map((article) => (
                <Grid item key={article.article_id} xs={12} sm={6} md={4}>
                  <NewsCard article={article} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Pagination
                count={nextPageToken ? page + 1 : page}
                page={page}
                onChange={handleChange}
                color="primary"
              />
            </Box>
          </>
        ) : (
          <Typography>No articles found.</Typography>
        )}
      </Container>
    </motion.div>
  );
}

export default NewsDetails;
