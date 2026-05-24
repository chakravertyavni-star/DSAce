import "../styles/Navbar.css";

import { Menu } from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function Navbar() {

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/");

  };

  return (

    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <h1 className="logo">
          Spro<span>uza</span>
        </h1>

        {/* LINKS */}

        <ul className="nav-links">

          <li>
            <Link to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to="/subjects">
              Subjects
            </Link>
          </li>

          <li>
            <Link to="/progress">
              Progress
            </Link>
          </li>

          <li>
            <Link to="/">
              RoadMap
            </Link>
          </li>

        </ul>

        {/* AUTH */}

        <div className="nav-auth">

          {!token ? (

            <Link to="/login">

              <button className="login-btn">
                Login
              </button>

            </Link>

          ) : (

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          )}

        </div>

        {/* MOBILE */}

        <div className="menu-icon">

          <Menu size={30} />

        </div>

      </div>

    </nav>

  );
}

export default Navbar;





