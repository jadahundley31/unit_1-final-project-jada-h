import { Link, useLocation } from "react-router";
import "./layout.css";

const Footer = () => {
  const location = useLocation();
  let thisYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; {thisYear} Beyond the Chapters</p>
          <p>Discover your next great read.</p>
        </div>

        {location.pathname !== "/about" && <Link to="/about">Contact Us</Link>}
      </div>
    </footer>
  );
};

export default Footer;
