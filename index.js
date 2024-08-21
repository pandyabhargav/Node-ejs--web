const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Set the path to the views directory
const viewsPath = path.join(__dirname, 'view');
app.set('views', viewsPath);

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from various directories
app.use('/css', express.static(path.join(__dirname, 'view/css')));
app.use('/images', express.static(path.join(__dirname, 'view/images')));
app.use('/fonts', express.static(path.join(__dirname, 'view/fonts')));
app.use('/extra', express.static(path.join(__dirname, 'view/extra')));
app.use('/js', express.static(path.join(__dirname, 'view/js')));

// Log incoming requests for debugging
app.use((req, res, next) => {
  console.log(`Request for ${req.url}`);
  next();
});

// Define routes
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/About', (req, res) => {
  res.render('About'); 
});

app.get('/Team', (req, res) => {
  res.render('Team'); 
});

// 404 Error Handler
app.use((req, res, next) => {
  res.status(404).send('Sorry, we cannot find that!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
