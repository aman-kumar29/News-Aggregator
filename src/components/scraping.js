const axios = require('axios');
const cheerio = require('cheerio');

const scrapeArticle = async (url) => {
  try {
    // Fetch the HTML content of the article
    const response = await axios.get(url);
    const html = response.data;

    // Parse HTML using cheerio
    const $ = cheerio.load(html);

    // Extract the full text of the article based on the HTML structure
    const articleText = $('.article-content').text();

    return articleText;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
};

// Example usage
const articleUrl = 'https://www.wired.com/story/the-race-to-put-brain-implants-in-people-is-heating-up/';
scrapeArticle(articleUrl)
  .then((articleText) => {
    if (articleText) {
      console.log('Article Text:', articleText);
    } else {
      console.log('Failed to retrieve article text.');
    }
  })
  .catch((error) => console.error('Error:', error));
