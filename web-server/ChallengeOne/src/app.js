const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Hello express');
});

app.get('/help', (req, res) => {
    res.send('help page');
});
app.get('/about', (req, res) => {
    res.send('About page');
});
app.get('/weather', (req, res) => {
    res.send('weather page');
});

app.listen(3000, () => {
    console.log('server is on')
});
/*
Goal: Setup two new routes
1. Setup an about route and render a page title
2. Setup a weather route and render a page title
3. Test your work by visiting both in browser
*/