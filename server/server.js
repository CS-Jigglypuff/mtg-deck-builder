const express = require('express');
const dbController = require('./controllers/dbController');
const app = express();
const path = require('path');

app.use(express.static(__dirname));
app.use(express.json());

app.get('/decks', dbController.get10Cards, (req, res) => {
  const { cards } = res.locals;
  res.status(200).json(cards);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/html/index.html'));
});

app.get('/', (err, req, res, next) => {
  const genericError = {
    log: 'there was an error somewhere',
    message: 'something went wrong',
  };
  const error = Object.assign({}, genericError, err);
  console.log(error.log);
  res.status(500).json(error.message);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}...`);
  console.log('Press Ctrl+C to quit');
});
