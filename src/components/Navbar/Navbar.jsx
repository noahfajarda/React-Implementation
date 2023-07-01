// Link == WILL PREVENT PAGE FROM REFRESHING!!
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full">
      <div>Navbar</div>
      <nav className="flex flex-col md:flex-row justify-between">
        {/* Link == WON'T REFRESH PAGE */}
        <Link to="/">
          <button>Main</button>
        </Link>
        <Link to="/hooks">
          <button>Hooks</button>
        </Link>
        <Link to="/state-management">
          <button>State Management</button>
        </Link>
        <Link to="/hoc">
          <button>HOC</button>
        </Link>
        <Link to="/weather">
          <button>Weather</button>
        </Link>
        <Link to="/nba-api">
          <button>NBA API</button>
        </Link>
        <Link to="*">
          <button>Default</button>
        </Link>
      </nav>
    </div>
  );
}
