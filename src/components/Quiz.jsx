// import React, { useState } from 'react';
import styled from 'styled-components';
import QuizBody from './QuizBody';
import ReadyForQuiz from './ReadyForQuiz';
import EndScreen from './EndScreen';
import { useState } from 'react';
import { QuizContext } from '../context/QuizContext';

const StyleQuizWripper = styled.div`
margin-top: 20px;
margin-bottom: 20px;
margin-left: 50px;
padding: 20px 40px;
width: 500px;
min-height: 300px;
background: #ffffff;
border-radius: 4px;
box-sizing: border-box;
`

const Quiz = () => {


  const [ quizState, setQuizState ] = useState('start');
  const [score, setScore] = useState(0);


  return (
    <div>
        <StyleQuizWripper>
          <QuizContext.Provider value={{ quizState, setQuizState, score, setScore }}>
            {quizState === 'start' && <ReadyForQuiz/>}
            {quizState === 'quiz' && <QuizBody/>}
            {quizState === 'endScreen' && <EndScreen/>}
          </QuizContext.Provider>
        </StyleQuizWripper>
    </div>
  )
}

export default Quiz;
