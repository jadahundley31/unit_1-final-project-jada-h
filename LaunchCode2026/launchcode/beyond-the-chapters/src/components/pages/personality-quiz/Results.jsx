import { useLocation } from "react-router";

const Results = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1> Your Personality Result: </h1>
            <p>{location.state.result}</p>
        </div>
    );
}

export default Results;