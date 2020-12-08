const express = require('express');
 morgan = require('morgan');

const app = express();
const bodyParser = require('body-parser'),
  methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

// Top 10 dutch movies
let topMovies = [
    {
      title: 'Zwartboek (2006)',
      director: 'Paul Verhoeven'
    },
    {
      title: 'Karakter (1997)',
      director: 'Mike van Diem'
    },
    {
      title: 'Rabat (2011)',
      director: 'Victor D. Ponten, Jim Taihuttu'
    }
    {
      title: 'Het Zakmes (1992)',
      director: 'Ben Sombogaart'
    },
    {
      title: 'Madelief: Krassen in het tafelblad (1998)',
      director: 'Ineke Houtman'
    },
    {
      title: 'Oorlogswinter (2008)',
      director: 'Martin Koolhoven'
    }
    {
      title: 'De Aanslag (1986)',
      director: 'Fons Rademakers'
    },
    {
      title: 'Alles is liefde (2007)',
      director: 'Joram Lürsen'
    },
    {
      title: 'De dominee (2004)',
      director: 'Gerrard Verhagen'
    }
    {
      title: 'Amsterdamned (1988)',
      director: 'Dick maas'
    }
  ];

  //Error handling in Express
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
  // GET requests
  app.get('/', (req, res) => {
    res.send('Welcome to my Dutch movie club!');
  });
  
  app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
  });
  
  app.get('/movies', (req, res) => {
    res.json(topMovies);
  });
  
  // listen for requests
  app.listen(8080, () =>
    console.log('Your app is listening on port 8080.');
  );
 
  // GET requests
  app.get('/', (req, res) => {
    res.send('Welcome to my Dutch movie club!');
  });
  
  app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
  });
  
  app.get('/movies', (req, res) => {
    res.json(topMovies);
  });