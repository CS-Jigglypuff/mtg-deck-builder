import { Link, Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home"
import { Builder } from './components/Builder';
import { Navbar } from './components/Navbar';

export default function App() {
  return(
    <div className="FullApp">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/builder" element={<Builder/>}/>
        </Routes>
      </main>
    </div>
  );
}