import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom/cjs/react-router-dom';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import NewsDetails from './NewsDetails';
// import NewsDetailsCategory from './NewsDetailsCategory';
import ArticleDetails from './ArticleDetails';
import Subscribe from './Subscribe';

function NotFound() {
  return <h2>404 Not Found</h2>;
}


function App() {
  const [searchKeywords, setSearchKeywords] = useState('');
  // const [searchCategory, setSearchCategory] = useState('');

  const handleSearch = (keywords) => {
    setSearchKeywords(keywords);
  };
  // const handleCategorySearch = (category) => {
  //   setSearchCategory(category);
  // };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch}  /> 
        {/* onCategorySearch = {handleCategorySearch} */}
        <Switch>
          <Route exact path="/">
            <NewsDetails apiKey="pub_3538878cb1f81c12426d02f635118ab11f95a" keywords={searchKeywords} />
          </Route>
          <Route path="/article/:id" component={() => <ArticleDetails apiKey="pub_3543105ef3e9bc681414994eba72a28960936" />} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Subscribe/>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
