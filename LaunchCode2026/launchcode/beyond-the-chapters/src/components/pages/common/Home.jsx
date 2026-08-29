import Results from "../personality-quiz/Results";
import { useNavigate } from "react-router";
import './home.css';


const Home = () => {
    const navigate = useNavigate();

    const handleFindRead = () => {
        navigate("/quiz");
    };

    return (
        <main className="home-section">
            <section className="home-text">
                <h1>Find the book that you were meant to read next.</h1>
                <p>15 questions. 5 matches. Just a quiz that took its time to uderstand you</p>
                <button onClick={handleFindRead}>Find your next read</button>
                <div className="home-image">
                    <img src="../images/clipart-books.png" alt="stack of books"/>
                </div>
            </section>
            <section>
                <h2>How it works</h2>
                <table>
                    <tr>
                        <th>01</th>
                        <th>02</th>
                        <th>03</th>
                    </tr>
                    <tr>
                        <th>Take the quiz</th>
                        <th>Get matched</th>
                        <th>Start reading</th>
                    </tr>
                    <tr>
                        <td>Answer 15 thoughtful questions about your personality.</td>
                        <td>Our algorithm finds books that resonate with who you are.</td>
                        <td>Discover your curated list, save favorite, or retake the quiz for fresh picks.</td>
                    </tr>
                </table>
            </section>
        </main>
    )
}

export default Home;