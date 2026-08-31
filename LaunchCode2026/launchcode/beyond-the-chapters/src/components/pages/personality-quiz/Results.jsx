import { useLocation, useNavigate } from "react-router";
import Recommendations from "./Recommendations";

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();

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