import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Deckview } from "./components/Deckview";
import Deckbuilder from "./components/deckbuilder";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/decks">Decks</Link>
          </li>
          <li>
            <Link to="/deckbuilder">Deckbuilder</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decks" element={<Deckview />} />
          <Route path="/deckbuilder" element={<Deckbuilder />} />
        </Routes>
      </main>
    </div>
  );
}
