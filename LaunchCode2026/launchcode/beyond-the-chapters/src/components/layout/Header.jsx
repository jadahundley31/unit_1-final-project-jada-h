import { Link, useLocation } from "react-router";
import "./layout.css";

const Header = () => {
  const location = useLocation();
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
      <nav>
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
