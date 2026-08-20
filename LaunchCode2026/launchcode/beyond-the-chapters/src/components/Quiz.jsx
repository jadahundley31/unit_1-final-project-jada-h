import { useState, useEffect } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);

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

  return (
    <div>
      {questions.map((question) => {
        return (
          <div>
            <li key={question.id}>{question.question}</li>
          </div>
        );
      })}
    </div>
  );
};

export default Quiz;
