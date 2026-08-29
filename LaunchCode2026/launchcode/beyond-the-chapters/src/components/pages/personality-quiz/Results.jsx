import { useLocation, useNavigate } from "react-router";
import Recommendations from "./Recommendations";

const Results = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleRetakeQuiz = () => {
        navigate("/quiz")
    }
    return (
        <div>
            <h2> Your Personality Result: </h2>
            <p>{location.state.result}</p>
            <Recommendations personality={location.state.result}/>
            <button onClick={handleRetakeQuiz}>
                Retake Quiz
            </button>
        </div>
    );
}

export default Results;