// run this file to seed the db

async function fetchData() {
  await fetch('https://api.scryfall.com/cards/search?q=set:khm', {
    method: 'get',
  })
    .then((response) => response.json())
    .then((cards) => cards.data)
    .then((cardArray) =>
      cardArray.forEach((card) => {
        let {
          id,
          name,
          rarity,
          type_line,
          color_identity,
          mana_cost,
          oracle_text,
          power,
          toughness,
          image_uris,
          card_faces,
        } = card;
        if (mana_cost === undefined) {
          mana_cost = card_faces[0].mana_cost;
        }
        if (mana_cost === '') {
          mana_cost = '0';
        }
        if (oracle_text === undefined) {
          oracle_text = card_faces[0].oracle_text;
        }
        if (power === undefined && type_line.includes('Creature')) {
          power = card_faces[0].power;
        }
        if (toughness === undefined && type_line.includes('Creature')) {
          toughness = card_faces[0].toughness;
        }
        if (image_uris === undefined) {
          image_uris = card_faces[0].image_uris;
        }
        image_uris = image_uris.normal;
        color_identity = color_identity.toString();
        console.log({
          id,
          name,
          rarity,
          type_line,
          color_identity,
          mana_cost,
          oracle_text,
          power,
          toughness,
          image_uris,
        });
      })
    );
}

fetchData();
