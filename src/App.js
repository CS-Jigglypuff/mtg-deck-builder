import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Deckview } from "./components/Deckview";
import Deckbuilder from "./components/Deckbuilder";

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
            <Link to="/builder">Deckbuilder</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/decks" element={<Deckview />} />
          <Route path="/builder" element={<Deckbuilder />} />
        </Routes>
        <Deckbuilder />
      </main>
    </div>
  );
}
