import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Grid,
} from '@mui/material';
import NewsCardSkeleton from './NewsCardSkeleton';

const ArticleDetails = () => {
  const location = useLocation();
  const { article } = location.state || {};

  return (
    <Container maxWidth="md" sx={{ mt: 4, bgcolor: '#fff', padding: '20px' }}>
      {article ? (
        <Card sx={{
          borderRadius: 10,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15) 0px 0px 0px rgba(0, 0, 0, 0)', // Shadow only at top and bottom
        }}>
          <CardContent>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight:'bold',textAlign: 'left' }}>
              {article.title}
            </Typography>
            <Typography size="small" color="textSecondary" sx={{ mb: 2 }}>
              {new Date(article.pubDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long' })} / {article.source}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {article.image_url && (
                <CardMedia
                  component="img"
                  height="250" // Adjusted image height
                  image={article.image_url}
                  alt={article.title}
                  sx={{ borderRadius: 5, maxWidth: '500px', margin: '20px auto' }}
                />
              )}
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1" sx={{ textAlign: 'left', fontSize: 18, fontFamily: 'Open Sans', lineHeight: 1.5 }}>
                  {article.content
                    .split(/<br\/>/)
                    .map((paragraph, index) => paragraph.trim())
                    .flatMap((paragraph) => paragraph.split(/\.(\s+)/))
                    .reduce((acc, paragraph, i) => {
                      if (i % 3 === 0) {
                        acc.push([]);
                      }
                      acc[acc.length - 1].push(paragraph);
                      return acc;
                    }, [])
                    .map((paragraphGroup, index) => (
                      <div key={index}>
                        {paragraphGroup.map((paragraph, index) => (
                          <p key={index} style={{ marginBottom: 16 }}>{paragraph}</p>
                        ))}
                        {index !== paragraphGroup.length - 1 && <br />}
                      </div>
                    ))}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <NewsCardSkeleton />
      )}
    </Container>
  );
};

export default ArticleDetails;
