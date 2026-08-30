import { useNavigate } from "react-router";
import "./common.css";

const Home = () => {
  const navigate = useNavigate();

  const handleFindRead = () => {
    navigate("/quiz");
  };

  return (
    <main className="home-section">
      <section className="home-text">
        <div className="home-content">
          <h1>
            Find the book that
            you were meant to <br/>read next.
          </h1>
          <p>
            15 questions. 5 matches. <br />
            Just a quiz that took its time to uderstand you
          </p>
          <button onClick={handleFindRead}>Find your next read</button>
        </div>
        <div className="home-image">
          <img src="../images/clipart-books.png" alt="stack of books" />
        </div>
      </section>
      <section className="table-section">
        <div>
            <h2>How it works</h2>
        </div>
        <table>
          <thead>
            <tr className="first-table-header">
              <th>01</th>
              <th>02</th>
              <th>03</th>
            </tr>
            <tr className="second-table-header">
              <th>Take the quiz</th>
              <th>Get matched</th>
              <th>Start reading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Answer 15 thoughtful questions about your personality.</td>
              <td>Our algorithm finds books that resonate with who you are.</td>
              <td>
                Discover your curated list, save favorite, or retake the quiz
                for fresh picks.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Home;
