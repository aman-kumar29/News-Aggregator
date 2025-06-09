import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const placeholderImages = [
  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/264425930/original/930064aa70b89e301e06c1ad37193011102bfdec/write-an-anime-article-of-your-choice.png",
  "https://th.bing.com/th/id/OIP.-9wbS4KOoXXDxyxQYW8q-wHaKm?rs=1&pid=ImgDetMain",
  "https://i.pinimg.com/736x/10/2f/47/102f475c1aba3b8b1d4d3ef187908412--dbz-manga-naruto-vs.jpg",
  "https://th.bing.com/th/id/OIP.wBE61HpYR9lcGHt4DjyQ8AHaCv?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.-WwWJYR_iHJtESh1fNOS6wHaCv?rs=1&pid=ImgDetMain",
  "https://i.ytimg.com/vi/5GbMYitgYtU/maxresdefault.jpg",
];

function NewsCard({ article }) {
  const { article_id, title, image_url, pubDate, description } = article;
  const img =
    image_url ||
    placeholderImages[Math.floor(Math.random() * placeholderImages.length)];

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Card
        component={Link}
        to={`/article/${article_id}`}
        state={{ article }}
        sx={{
          textDecoration: "none",
          width: 300,
          height: 420,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia component="img" height="160" image={img} alt={title} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description?.slice(0, 90)}…
          </Typography>
        </CardContent>
        <CardContent
          sx={{ pt: 0, display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="caption">
            {new Date(pubDate).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })}
          </Typography>
          <Typography variant="caption">3 min read</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default NewsCard;
