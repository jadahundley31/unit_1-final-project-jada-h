import { useState, useEffect } from "react";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

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

    function handleChoice(choice){
        console.log(choice.category);
    }

    return (
      <div>
        {questions[currentQuestion].question}
        {questions[currentQuestion].choices.map((choice) => {
          return <button key={choice.id} onClick={() => handleChoice(choice)}>{choice.text}</button>;
        })}
      </div>
    );
  }
};

export default Quiz;
