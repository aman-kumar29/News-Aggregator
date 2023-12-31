import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Grid
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FitbitIcon from '@mui/icons-material/Fitbit';

const Footer = () => {
  return (
    <Box sx={{p: 6, display: 'flex', flexDirection: 'column', alignItems: 'center',background: 'linear-gradient(to right, #393E46, #242629)',color:'#F7F7F7',fontFamily: 'Georgia, serif' }} component="footer">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <IconButton size="large" sx={{color:'#F7F7F7'}}>
            <FitbitIcon />
          </IconButton>
          <Typography variant="h4" sx={{ ml: 2 }}>
            NewZera
          </Typography>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center"> {/* Centered icons using Grid */}
          <IconButton style={{ backgroundColor: '#3b5998', marginRight: 4 }}>
            <FacebookIcon style={{ color: '#fff' }} />
          </IconButton>
          <IconButton style={{ backgroundColor: '#55acee', marginRight: 4 }}>
            <TwitterIcon style={{ color: '#fff' }} />
          </IconButton>
          <IconButton style={{ backgroundColor: '#dd4b39', marginRight: 4 }}>
            <GoogleIcon style={{ color: '#fff' }} />
          </IconButton>
          <IconButton style={{ backgroundColor: '#ac2bac', marginRight: 4 }}>
            <InstagramIcon style={{ color: '#fff' }} />
          </IconButton>
          <IconButton style={{ backgroundColor: '#0082ca', marginRight: 4 }}>
            <LinkedInIcon style={{ color: '#fff' }} />
          </IconButton>
          <IconButton style={{ backgroundColor: '#333333' }}>
            <GitHubIcon style={{ color: '#fff' }} />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
             Made By Aman❤️️
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
