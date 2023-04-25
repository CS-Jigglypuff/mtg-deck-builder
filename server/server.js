const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(__dirname, 'index.html');
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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}...`);
  console.log('Press Ctrl+C to quit');
});
