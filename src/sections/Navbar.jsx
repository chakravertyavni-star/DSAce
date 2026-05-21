import "../styles/Navbar.css";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <h1 className="logo">
          Spro<span>uza</span>
        </h1>

        {/* Links */}
      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/subjects">Subjects</Link>
        </li>

        <li>
          <Link to="/">Visualizer</Link>
        </li>

        <li>
          <Link to="/">Roadmap</Link>
        </li>

        <li>
          <Link to="/">About</Link>
        </li>

      </ul>

 

        {/* Mobile Icon */}
        <div className="menu-icon">
          <Menu size={30} />
        </div>

      </div>

    </nav>
  );
}

export default Navbar;