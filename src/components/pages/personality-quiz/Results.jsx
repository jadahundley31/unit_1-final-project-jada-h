import { useLocation, useNavigate } from "react-router";
import Recommendations from "./Recommendations";
import "./results-recommendations.css";

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();

    if(!location.state) {
        return (
            <div className="results-guard">
                <p>No results found. Please take the quiz first.</p>
                <button onClick={() => navigate("/quiz")}>
                    Take Quiz
                </button>
            </div>
        );    
    }

    const handleRetakeQuiz = () => {
        navigate("/quiz")
    }

    return (
        <main className="results-page">
            <section className="results-header">
                <h2> Your Personality Result: </h2>
                <p>{location.state.result}</p>
            </section>

            <Recommendations personality={location.state.result}/>

            <div className="results-navigation">
                <button onClick={handleRetakeQuiz}>
                    Retake Quiz
                </button>
            </div>
        </main>
    );
}

export default Results;