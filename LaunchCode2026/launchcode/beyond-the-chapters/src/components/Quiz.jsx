import personalityQuestions from "/mock-data/personalityQuestions";
import { useState } from "react";


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);

}
const [questions, setQuestions] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [scores, setScores] = useState(0);

export default Quiz;
