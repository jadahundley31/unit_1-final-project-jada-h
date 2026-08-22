import { useState, useEffect } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const totalQuestion = 15;

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
        setSelectedCategory(choice.category);
        console.log(choice.category);
    }
    const handleNextQuestion = () => {
        if (currentQuestion < totalQuestion) {
            setCurrentQuestion((previousQuestion) => {
                return previousQuestion + 1;
            })
        }
    }

    return (
      <div>
        {questions[currentQuestion].question}
        {questions[currentQuestion].choices.map((choice) => {
          return <button key={choice.id} onClick={() => handleUserChoice(choice)}>{choice.text}</button>;
        })}

        {currentQuestion < totalQuestion ? (<button onClick={handleNextQuestion}>Next Question</button>) : (<p>You've reached the end!</p>)}
      </div>
    );
  }
};

export default Quiz;
