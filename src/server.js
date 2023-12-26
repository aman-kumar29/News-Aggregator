const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/news/:id', async (req, res) => {
  try {
    const apiUrl = `https://newsdata.io/api/1/news/${req.params.id}?apikey=pub_3538878cb1f81c12426d02f635118ab11f95a`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching article details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
