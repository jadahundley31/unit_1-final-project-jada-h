import "./layout.css";
import { Link, useLocation } from "react-router";

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
          <li><Link to="/user">My Books</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
