import { useLocation } from "react-router";
import Recommendations from "./Recommendations";

const Results = () => {
    const location = useLocation();
    return (
        <div>
            <h1> Your Personality Result: </h1>
            <p>{location.state.result}</p>
        </div>
    );
    <Recommendations personality={result}/>
}

export default Results;