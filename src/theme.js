import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#393E46",
      contrastText: "#F7F7F7",
    },
    background: {
      default: "#F7F7F7",
    },
  },
  typography: {
    fontFamily: "Georgia, serif",
    h3: { fontWeight: 700 },
  },
});

export default theme;
