import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AnimatePresence } from "framer-motion";

import theme from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsDetails from "./components/NewsDetails";
import ArticleDetails from "./components/ArticleDetails";
import Subscribe from "./components/Subscribe";

// Small wrapper so AnimatePresence gets route location changes
function AnimatedRoutes({
  searchKeywords,
  searchCategory,
  searchCountry,
  searchTimeframe,
  searchLanguage,
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <NewsDetails
              apiKey="pub_35433cde697fd073e4a7b21406399d51d52ff"
              keywords={searchKeywords}
              category={searchCategory}
              country={searchCountry}
              timeframe={searchTimeframe}
              language={searchLanguage}
            />
          }
        />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="*" element={<h2>404 – Not Found</h2>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [searchKeywords, setSearchKeywords] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [searchTimeframe, setSearchTimeframe] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");

  const handleSearch = (newKeywords, options) => {
    setSearchKeywords(newKeywords);
    setSearchCategory(options.category);
    setSearchCountry(options.country);
    setSearchTimeframe(options.timeframe);
    setSearchLanguage(options.language);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header onSearch={handleSearch} />
        <AnimatedRoutes
          searchKeywords={searchKeywords}
          searchCategory={searchCategory}
          searchCountry={searchCountry}
          searchTimeframe={searchTimeframe}
          searchLanguage={searchLanguage}
        />
        <Subscribe />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
