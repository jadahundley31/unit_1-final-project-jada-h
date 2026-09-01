import { Link, useLocation } from "react-router";
import "./layout.css";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo-container">
        {
          <img
            id="logo"
            src="../images/logo.png"
            alt="beyond-the-chapters-logo"
          />
        }
        <strong>Beyond the Chapters</strong>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰ 
      </button> {/* If menuOpen is false, clicking changes it to true, and again back to false */}
      
      {/* if menuOpen is true, give nav the class "nav-open", otherwise don't add a class */}  
      <nav className={menuOpen ? "nav-open" : ""}>
        <ul>
          <li>
            {location.pathname !== "/home" && <Link to="/home">Home</Link>}
          </li>
          <li>{location.pathname !== "/quiz" && <Link to="/quiz">Start Quiz</Link>}</li>
          <li>{location.pathname !== "/user" && <Link to="/user">My Books</Link>}</li>
          <li>{location.pathname !== "/about" && <Link to="/about">About Us</Link>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
