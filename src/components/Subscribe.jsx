import React from "react";
import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";

function Subscribe() {
  return (
    <Paper elevation={0} sx={{ background: "#F7F7F7", py: 6 }}>
      <Grid container maxWidth="lg" mx="auto" spacing={4} px={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Subscribe to Weekly Updates
          </Typography>
          <Typography>
            We’ll email you helpful links, guides for kids & students, plus
            important news each week.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
          >
            <TextField label="Name" fullWidth required size="small" />
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              size="small"
            />
            <Button type="submit" variant="contained" sx={{ flexShrink: 0 }}>
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Subscribe;
