import { Link, Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home"
import { Deckview } from './components/Deckview';
import { Navbar } from './components/Navbar';

export default function App() {
  return(
    <div className="FullApp">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/decks" element={<Deckview/>}/>
        </Routes>
      </main>
    </div>
  );
}