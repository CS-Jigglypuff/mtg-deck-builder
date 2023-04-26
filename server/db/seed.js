// run this file to seed the db
// const db = require('./index');

// const createCardTable = `CREATE TABLE cards (
//   id VARCHAR NOT NULL,
//   name VARCHAR,
//   rarity VARCHAR,
//   type_line VARCHAR,
//   color_identity VARCHAR,
//   mana_cost VARCHAR,
//   oracle_text VARCHAR,
//   power VARCHAR DEFAULT 'NA',
//   toughness VARCHAR DEFAULT 'NA',
//   image_uris VARCHAR,
//   card_faces VARCHAR DEFAULT 'NA'
//   )`;

// db.query(createCardTable);

// async function fetchData() {
//   await fetch(
//     'https://api.scryfall.com/cards/search?format=json&include_extras=false&include_multilingual=false&include_variations=false&order=name&page=2&q=set%3Akhm&unique=cards',
//     {
//       method: 'get',
//     }
//   )
//     .then((response) => response.json())
//     .then((cards) => cards.data)
//     .then((cardArray) =>
//       cardArray.forEach((card) => {
//         let {
//           id,
//           name,
//           rarity,
//           type_line,
//           color_identity,
//           mana_cost,
//           oracle_text,
//           power,
//           toughness,
//           image_uris,
//           card_faces,
//         } = card;
//         if (mana_cost === undefined) {
//           mana_cost = card_faces[0].mana_cost;
//         }
//         if (mana_cost === '') {
//           mana_cost = '0';
//         }
//         if (oracle_text === undefined) {
//           oracle_text = card_faces[0].oracle_text;
//         }
//         if (power === undefined && type_line.includes('Creature')) {
//           power = card_faces[0].power;
//         }
//         if (toughness === undefined && type_line.includes('Creature')) {
//           toughness = card_faces[0].toughness;
//         }
//         if (image_uris === undefined) {
//           image_uris = card_faces[0].image_uris;
//         }
//         image_uris = image_uris.normal;
//         color_identity = color_identity.toString();
//         const newCard = new Array(
//           id,
//           name,
//           rarity,
//           type_line,
//           color_identity,
//           mana_cost,
//           oracle_text,
//           power,
//           toughness,
//           image_uris
//         );
//         const insertCard = `INSERT INTO cards (id, name, rarity, type_line,
//           color_identity,
//           mana_cost,
//           oracle_text,
//           power,
//           toughness,
//           image_uris) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
//         db.queryOne(insertCard, newCard);
//       })
//     );
// }

// fetchData();
