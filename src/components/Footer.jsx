import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FitbitIcon from "@mui/icons-material/Fitbit";

const icons = [
  { icon: <FacebookIcon />, bg: "#3b5998" },
  { icon: <TwitterIcon />, bg: "#55acee" },
  { icon: <InstagramIcon />, bg: "#ac2bac" },
  { icon: <LinkedInIcon />, bg: "#0082ca" },
  { icon: <GitHubIcon />, bg: "#333" },
];

function Footer() {
  return (
    <Box
      sx={{
        mt: 6,
        py: 6,
        textAlign: "center",
        background: "#242629",
        color: "#F7F7F7",
      }}
    >
      <FitbitIcon sx={{ fontSize: 40, mb: 1 }} />
      <Typography variant="h4" gutterBottom>
        NewZera
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2} mb={2}>
        {icons.map(({ icon, bg }, i) => (
          <IconButton key={i} sx={{ background: bg, color: "#fff" }}>
            {icon}
          </IconButton>
        ))}
      </Stack>
      <Typography variant="body2">Made by Aman ❤️</Typography>
    </Box>
  );
}

export default Footer;
