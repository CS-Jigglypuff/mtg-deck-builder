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
        console.log(mana_cost);
      })
    );
}

fetchData();
