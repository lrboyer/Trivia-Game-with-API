import { useEffect, useState } from "react";
import axios from "axios";
import { AllHtmlEntities, decode, XmlEntities } from "html-entities";

const entities = new AllHtmlEntities();

const GameBoard = () => {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [streak, setStreak] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);

  useEffect(() => {
    axios
      .get(
        'https://opentdb.com/api.php?amount=30&category=15&difficulty=easy&type=boolean'
      )
      .then((response) => {
        const result = response.data.results[questionNum];

        setQuestion(result.question);
        setAnswer(result.correct_answer);
      });
  }, [questionNum]);

  const handleTrue = () => {
    if(answer === 'True') {
      setStreak((prevStreak) => prevStreak + 1);
    }
    else {
      setStreak(0);
    }
    setQuestionNum((prevQuestionNum) => prevQuestionNum + 1);
  }

  const handleFalse = () => {
    if(answer === 'False') {
      setStreak((prevStreak) => prevStreak + 1);
    }
    else {
      setStreak(0);
    }
    setQuestionNum((prevQuestionNum) => prevQuestionNum + 1);
  }

  return (
    <div class="text-center">
      <p class="text-5xl font-bold underline">Trivia Game</p>
      <p class='my-4 text-3xl'>Current Streak: {streak}</p>
      <div>
        {question !== null && (
          <p class="my-8 text-center">{XmlEntities.decode(question)}</p>
        )}
      </div>
      <div>
        <button onClick={handleTrue} class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mx-4">
          True
        </button>
        <button onClick={handleFalse} class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mx-4">
          False
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
