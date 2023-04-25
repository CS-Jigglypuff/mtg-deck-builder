const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(__dirname, '/src/html/index.html')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}...`)
  console.log('Press Ctrl+C to quit')
})