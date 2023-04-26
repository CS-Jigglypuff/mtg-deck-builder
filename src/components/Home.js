import { Link } from 'react-router-dom';

export function Home() {

  const decks = ['deck1', 'deck2', 'deck3', 'deck4', 'deck5']
  
  let decklist = []
  // for(let i=0;i<decks.length; i++){
  //  decklist.push(<div>{desk[i]}</div>);
  // };

  return(
    <div className="FullHome">
      <Link to="/builder">
          <button className="AddDeckButton">
            Add Deck
          </button>
        </Link>
      <div className="HomeDeckLayout">
        {/* {decklist} */}
        <div className="DeckStyle">deck 1<img src="MTG-cardback.jpeg" alt="mtg card"></img></div>
        <div className="DeckStyle">deck 2</div>
        <div className="DeckStyle">deck 3</div>
        <div className="DeckStyle">deck 4</div>
        <div className="DeckStyle">deck 5</div>
        <div className="DeckStyle">deck 6</div>
        <div className="DeckStyle">deck 7</div>
        <div className="DeckStyle">deck 8</div>
      </div>
    </div>

  );
}