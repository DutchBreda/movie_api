const express = require('express');
  morgan = require('morgan');

  const app = express();

  var movies = ["topMovies", "Director", "Year"];

let myLogger = (req, res, next) => {
  console.log(req.url);
  next();
};

let requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

app.use(myLogger);
app.use(requestTime);
app.use(morgan('common')); //Morgan login
app.use(express.static("public")); //Retrieving files from public folder
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); //Error Handling

app.get('/', (req, res) => {
  let responseText = 'Welcome to my Movie app!';
  responseText += '<small>Requested at: ' + req.requestTime + '</small>';
  res.send(responseText);
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/movies', (req, res) => {
  res.json(Director);
});

app.get('/movies', (req, res) => {
  res.json(Year);
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
