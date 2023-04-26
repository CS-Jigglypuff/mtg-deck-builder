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
        <Link to="/builder">
          <button>
            Builder
          </button>
        </Link>
      </div>
    </div>
  );
}