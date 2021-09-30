import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import QuestionBox from './QuestionBox';

function App() {

  const [questions, setQuestions] = useState([]);
  const [questionInfo, setQuestionInfo] = useState({question: "q", answers: [1, 2, 3, 4]});
  const [currentQ, setCurrentQ] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const setQuestion = (newQuestion) => {
    setCurrentQ(newQuestion);

    console.log(questions)
    setCorrectAnswer(questions[newQuestion].answers[0]);
    setQuestionInfo({
      question: questions[newQuestion].question,
      answers: questions[newQuestion].answers.sort(() => .5 - Math.random())
    });
  }

  useEffect(() => {
    axios.get('http://localhost:40/questions').then((res) => {
      setQuestions(res.data);
      setCorrectAnswer(res.data[0].answers[0]);
      setQuestionInfo({
        question: res.data[0].question,
        answers: res.data[0].answers.sort(() => .5 - Math.random())
      });
    });
  }, []);

  return (
    <div>
      <header>
        <div class="arrow arrow-left" onClick={() => {
          setQuestion(currentQ - 1);
        }}></div>
        <p>Question {currentQ + 1}</p>
        <div class="arrow arrow-right" onClick={() => {
          setQuestion(currentQ + 1);
        }}></div>
      </header>
      <QuestionBox
        question={questionInfo.question}
        answers={questionInfo.answers}
        correct={correctAnswer} />
    </div>
  );
}

export default App;
