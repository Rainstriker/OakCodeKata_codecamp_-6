// imports
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express(); 
const PORT = 3000

// Set Views
app.use(expressLayouts);
app.set('layout', './layouts/full-width');
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// Navigation
app.get('/home', (req, res) => {
  res.render('index', {title: 'Home Page'});
})

app.get('/top-story', (req, res) => {
  res.render('topStory', {title: 'Top Story'});
})

app.get('/my-turn-1', (req, res) => {
  res.render('turn1', {title: 'My Turn'});
})

app.get('/my-turn-2', (req, res) => {
  res.render('turn2', {title: 'My Turn'});
})

app.get('/my-turn-3', (req, res) => {
  res.render('turn3', {title: 'My Turn'});
})

app.get('/my-turn-4', (req, res) => {
  res.render('turn4', {title: 'My Turn'});
})

app.get('/my-turn-5', (req, res) => {
  res.render('turn5', {title: 'My Turn'});
})

app.get('/my-turn-6', (req, res) => {
  res.render('turn6', {title: 'My Turn'});
})

app.get('/featured-1', (req, res) => {
  res.render('title1', {title: 'Featured Stories'});
})

app.get('/featured-2', (req, res) => {
  res.render('title2', {title: 'Featured Stories'});
})

//   Listen on port 3000
app.listen(PORT, () => console.info(`Listening on port ${PORT}`));