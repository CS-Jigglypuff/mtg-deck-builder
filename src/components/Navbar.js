import { Link } from "react-router-dom";

export function Navbar() {
  return(
    <div className="FullNavBar">
      <div className="NavLeft">
        <Link to="/">
          <button>
            Home
          </button>
        </Link>
        <Link to="/decks">
          <button>
            Decks
          </button>
        </Link>
      </div>
    </div>
  );
}