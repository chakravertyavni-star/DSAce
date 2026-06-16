import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "../styles/Navbar.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Curriculum", to: "/subjects" },
  { label: "Progress", to: "/progress" },
  { label: "Roadmap", to: "/roadmap" },
];

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setMenuOpen(false);
    navigate("/");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${menuOpen ? "navbar-open" : ""}`}>

      <div className="navbar-container">

        <Link to="/" className="logo" onClick={closeMenu}>
          DSA<span>ce</span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={location.pathname === item.to ? "active" : ""}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-auth">
          {!token ? (
            <Link to="/login">
              <button className="login-btn" type="button">
                Login
              </button>
            </Link>
          ) : (
            <button
              className="logout-btn"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>

        <button
          className="menu-icon"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={location.pathname === item.to ? "active" : ""}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-auth">
          {!token ? (
            <Link to="/login" onClick={closeMenu}>
              <button className="login-btn mobile-login-btn" type="button">
                Login
              </button>
            </Link>
          ) : (
            <button
              className="logout-btn mobile-logout-btn"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {menuOpen && (
        <button
          className="mobile-menu-backdrop"
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}

    </nav>
  );
}

export default Navbar;
