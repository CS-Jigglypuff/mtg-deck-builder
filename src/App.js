import { Link, Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home"
import { Deckview } from './components/Deckview';

export default function App() {
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/decks">Decks</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/decks" element={<Deckview/>}/>
        </Routes>
      </main>
    </div>
  );
}