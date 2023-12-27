import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

function Subscribe() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
      <Card sx={{width: '60%', '@media (max-width: 1200px)': { width: '60%'},'@media (max-width: 768px)': {width: '90%'}}}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Join our community and receive updates!
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              label="Your email address"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained">
              Subscribe
            </Button>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            © 2023
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Subscribe;
