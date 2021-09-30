import { useState, useEffect } from 'react';
import './App.css';
import QuestionBox from './QuestionBox';
import APIClient from './APIClient';

function App() {

  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(1);
  const [answers, setAnswers] = useState({answers: [0,0,0,0]});
  const [correctAnswer, setCorrectAnswer] = useState(0);

  useEffect(() => {
    setQuestions(APIClient.getQuestions());
    let questionDetails = APIClient.getQuestionDetails(1);
    setAnswers(questionDetails.answers);
    setCorrectAnswer(questionDetails.correct_answer);
  }, [setQuestions, setAnswers, setCorrectAnswer]);

  console.log(answers)
  return (
    <div>
      <header>
        <div class="arrow arrow-left"></div>
        <p>Question {currentQ}</p>
        <div class="arrow arrow-right"></div>
      </header>
      <QuestionBox
        question={questions[correctAnswer]}
        answers={answers} />
    </div>
  );
}

export default App;
