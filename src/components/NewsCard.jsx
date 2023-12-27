import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material';


const placeholderImages = [
  'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/264425930/original/930064aa70b89e301e06c1ad37193011102bfdec/write-an-anime-article-of-your-choice.png',
  'https://th.bing.com/th/id/OIP.-9wbS4KOoXXDxyxQYW8q-wHaKm?rs=1&pid=ImgDetMain',
  'https://i.pinimg.com/736x/10/2f/47/102f475c1aba3b8b1d4d3ef187908412--dbz-manga-naruto-vs.jpg',
];

const NewsCard = ({ article }) => {
  const {
    article_id,
    title,
    image_url,
    pubDate,
    content
  } = article;

  const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
  const theme = useTheme();
  const [transform, setTransform] = useState(1);


  return (
    <Card sx={{
      width: '300px',
      height: '410px',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
      transform: `scale(${transform})`, // Ensure this line is present
      transition: theme.transitions.create('transform', {
        duration: 0.9,
        easing: 'cubic-bezier(1.0, 1.0, 1.0, 1.0)',
      }),
    }}
    onMouseEnter={() => setTransform(1.02)}
    onMouseLeave={() => setTransform(1)}>
      <CardActionArea component={Link} to={{ pathname: `/article/${article_id}`, state: { article }}} style={{ textDecoration: 'none' }}>
        <CardMedia
          component="img"
          height="150px"
          image={image_url || randomImage}
          alt={title}
          style={{ objectFit: 'cover' }}
        />
        <CardContent style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '200px' }}>
          <Typography variant="h6" component="div" style={{ fontWeight:'bold',height: '120px', marginBottom: '10px' }} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" style={{ marginBottom: '10px', marginTop: 'auto' }} sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Stack direction="row" spacing ={9}>
        <Typography variant="body1" edge='start' color="text.secondary">
          {new Date(pubDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long' })}
        </Typography>

          <Typography edge='end' variant='body1' color="text.secondary">
            3 min. Read
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
