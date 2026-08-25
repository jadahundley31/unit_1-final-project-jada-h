import { useLocation } from "react-router";
import Recommendations from "./Recommendations";

const Results = () => {
    const location = useLocation();
    return (
        <div>
            <h2> Your Personality Result: </h2>
            <p>{location.state.result}</p>
            <Recommendations personality={location.state.result}/>
        </div>
    );
}

export default Results;