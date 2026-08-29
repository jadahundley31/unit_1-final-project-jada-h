import { Link, useLocation } from "react-router";

const Footer = () => {
    const location = useLocation();
    let thisYear = new Date().getFullYear();

    return (
        <footer>
            <div>
                <p>&copy; {thisYear} Beyond the Chapters</p>
                <p>Discover your next great read.</p>
                {location.pathname !== "/about" && (
                    <Link to="/about">About Us</Link>
                )}
            </div>
        </footer>
    )
}

export default Footer;