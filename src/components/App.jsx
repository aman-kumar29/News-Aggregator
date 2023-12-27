import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom/cjs/react-router-dom';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import NewsDetails from './NewsDetails';
import ArticleDetails from './ArticleDetails';
import Subscribe from './Subscribe';

function NotFound() {
  return <h2>404 Not Found</h2>;
}


function App() {
  const [searchKeywords, setSearchKeywords] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchCountry, setSearchCountry] = useState('');
  const [searchTimeframe, setSearchTimeframe] = useState('');
  const [searchLanguage, setSearchLanguage] = useState('');

  const handleSearch = (newKeywords, options) => {
    setSearchKeywords(newKeywords);
    setSearchCategory(options.category);
    setSearchCountry(options.country);
    setSearchTimeframe(options.timeframe);
    setSearchLanguage(options.language);
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Switch>
          <Route exact path="/">
            <NewsDetails
              apiKey="pub_35433cde697fd073e4a7b21406399d51d52ff"
              keywords={searchKeywords}
              category={searchCategory}
              country={searchCountry}
              timeframe={searchTimeframe}
              language={searchLanguage}
            />
          </Route>
          <Route path="/article/:id" component={() => <ArticleDetails apiKey="pub_35433cde697fd073e4a7b21406399d51d52ff" />} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Subscribe/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
