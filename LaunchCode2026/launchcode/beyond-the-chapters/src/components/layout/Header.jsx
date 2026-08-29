import './layout.css';
import { Link, useLocation } from "react-router";

const Header = () => {
    const location = useLocation();
    return (
        <header>
            <div className='logo-container'>
                {<img id ="logo" src="../images/logo.png" alt="beyond-the-chapters-logo"/>}
                <strong>Beyond the Chapters</strong>
            </div>
            <nav>
                {location.pathname !== "/home" && (
                    <Link to="/home">Home</Link>
                )}
                {location.pathname !== "/quiz" && (
                    <Link to="/quiz">Start Quiz</Link>
                )}
                <Link to="/user">My Books</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}

export default Header;