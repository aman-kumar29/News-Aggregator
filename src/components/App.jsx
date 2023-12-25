import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom/cjs/react-router-dom';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import NewsDetails from './NewsDetails';
import ArticleDetails from './ArticleDetails';


function NotFound() {
  return <h2>404 Not Found</h2>;
}


function App() {
  const [searchKeywords, setSearchKeywords] = useState('');

  const handleSearch = (keywords) => {
    setSearchKeywords(keywords);
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Switch>
          <Route exact path="/">
            <NewsDetails apiKey="pub_3538878cb1f81c12426d02f635118ab11f95a" keywords={searchKeywords} />
          </Route>
          <Route path="/article/:id" component={() => <ArticleDetails apiKey="pub_3538878cb1f81c12426d02f635118ab11f95a" />} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
