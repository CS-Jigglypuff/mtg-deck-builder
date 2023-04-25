const path = require('path');
const express = require('express');

const app = express()

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(__dirname, 'index.html')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}...`)
  console.log('Press Ctrl+C to quit')
})