// run this file to seed the db

fetch('https://api.scryfall.com/cards/search?q=set:khm', {
  method: 'get',
})
  .then((response) => response.json())
  .then((data) => console.log(data.data[0].name));
