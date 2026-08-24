import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [scores, setScores] = useState({
    Adventurer: 0,
    Comedic: 0,
    Romantic: 0,
    Detective: 0,
    Horror: 0,
  });
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/mock-data/personalityQuestions.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load file");
        }
        return response.json();
      })
      .then((jsonData) => {
        setQuestions(jsonData);
      })
      .catch((error) => {
        console.log("Error loading data:", error);
      });
  }, []);

  if (questions.length === 0) {
    return <p>Loading quiz...</p>;
  } else {
    const handleUserChoice = (choice) => {
      if (selectedCategory === "") {
        setSelectedCategory(choice.category);
        updateScore(choice);

        if (currentQuestion === questions.length - 1) {
          setIsComplete(true);
        }
      }
    };

    const handleNextQuestion = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((previousQuestion) => {
          return previousQuestion + 1;
        });
        setSelectedCategory("");
      }
    };

    const updateScore = (choice) => {
      if (choice.category === "Adventurer") {
        setScores((prevScores) => {
          return {
            ...prevScores,
            Adventurer: prevScores.Adventurer + 1,
          };
        });
      } else if (choice.category === "Comedic") {
        setScores((prevScores) => {
          return {
            ...prevScores,
            Comedic: prevScores.Comedic + 1,
          };
        });
      } else if (choice.category === "Romantic") {
        setScores((prevScores) => {
          return {
            ...prevScores,
            Romantic: prevScores.Romantic + 1,
          };
        });
      } else if (choice.category === "Detective") {
        setScores((prevScores) => {
          return {
            ...prevScores,
            Detective: prevScores.Detective + 1,
          };
        });
      } else if (choice.category === "Horror") {
        setScores((prevScores) => {
          return {
            ...prevScores,
            Horror: prevScores.Horror + 1,
          };
        });
      }
    };

    const handleGetResults = () => {
      const result = calculateResults(scores);
      navigate("/results", { state: {result} });

      console.log(result);
    };

    const calculateResults = (scores) => {
      let highestScore = 0;
      let winningCategory = "";
      
      for (let key in scores) {
        if (scores[key] > highestScore) {
          highestScore = scores[key];
          winningCategory = key;
        }
      }
      return winningCategory;
    };

    return (
      <div>
        <p>
          Question {currentQuestion + 1} of {questions.length}
        </p>
        {questions[currentQuestion].question}
        {questions[currentQuestion].choices.map((choice) => {
          return (
            <button
              key={choice.id}
              onClick={() => handleUserChoice(choice)}
              disabled={selectedCategory !== ""}
            >
              {choice.text}
            </button>
          );
        })}

        {currentQuestion < questions.length - 1 && (
          <button onClick={handleNextQuestion}>Next Question</button>
        )}

        {isComplete && (<button onClick={handleGetResults}>Get Results</button>)}
      </div>
    );
  }
};

export default Quiz;
