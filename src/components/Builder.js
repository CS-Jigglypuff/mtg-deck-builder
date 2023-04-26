export function Builder() {

  

  return(
    <div className="FullBuilder">
      <div className="BuilderLeft">
        Deckview
      </div>
      <div className="BuilderRight">
        <div className="FilterDropDowns">
        <form action="/action_page.php">
          <label for="colors">Color:</label>
          <select id="ColorSort" name="colors">
            <option value="all">ALL</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
          <label for="cost">Cost:</label>
          <select id="CostSort" name="cost">
            <option value="all">ALL</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <label for="rarity">Rarity:</label>
          <select id="RaritySort" name="rarity">
            <option value="all">ALL</option>
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="mythic-rare">Mythic Rare</option>
          </select>
          <label for="type">Type:</label>
          <select id="TypeSort" name="type">
            <option value="all">ALL</option>
            <option value="volvo">Normal</option>
            <option value="saab">Epic</option>
            <option value="fiat">Mythic</option>
            <option value="audi">Black</option>
            <option value="audi">Legendary</option>
          </select>
          <label for="power">Power:</label>
          <select id="PowerSort" name="power">
            <option value="all">ALL</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <label for="toughness">Toughness:</label>
          <select id="ToughnessSort" name="toughness">
            <option value="all">ALL</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <input type="submit"/>
        </form>
        </div>
        <div className="CardLayout">
          <div className="CardStyle">card1</div>
          <div className="CardStyle">card2</div>
          <div className="CardStyle">card3</div>
          <div className="CardStyle">card4</div>
          <div className="CardStyle">card5</div>
          <div className="CardStyle">card6</div>
          <div className="CardStyle">card7</div>
          <div className="CardStyle">card8</div>
          <div className="CardStyle">card9</div>
          <div className="CardStyle">card10</div>
          <div className="CardStyle">card11</div>
          <div className="CardStyle">card12</div>
          <div className="CardStyle">card13</div>
          <div className="CardStyle">card14</div>
          <div className="CardStyle">card15</div>
          <div className="CardStyle">card16</div>
        </div>
      </div>
    </div>

  );
}