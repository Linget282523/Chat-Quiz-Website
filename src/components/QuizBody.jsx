import { useState, useContext } from 'react';
import styled from 'styled-components';
import { Questions } from '../context/QuestionBank';
import { QuizContext } from '../context/QuizContext';


const StyleActiveSpan = styled.span`
font-size: 26px;
font-weight: 500;
color: #150080;
`

const StyleSpan = styled.span`
font-size: 15px;
font-weight: 500;
color: #9c9c9c;
`

const StyleQuestion = styled.h2`
font-size: 20px;
font-weight: 700;
padding-top: 17px;
margin: 0;
color: #150080;
margin-top: -10px;
`
const StyleAnswer = styled.ul`
margin-top: 15px;
margin-left: -70px;
`

const StyleAnswerText = styled.li`

text-decoration: none;
list-style: none;
color: #2d264b;
font-size: 15px;
background: #ffffff;
border: 1px solid #9c9c9c;
border-radius: 16px;
padding: 11px;
margin-top: 15px;
cursor: pointer;
}
`

const StyleBtnBox = styled.div`
display: flex;
justify-content: right;
`

const StyleBtn = styled.button`
width: 70px;
height: 30px;
`

const StyleBtnFinish = styled.button`
width: 70px;
height: 30px;
`

const QuizBody = () => {
    
  const { score, setScore, setQuizState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerChosen, setAnswerChosen] = useState('');

  const nextQuestion = () => {
    if (Questions[currentQuestion].correct_answer === answerChosen) {
      setScore(score + 1);
    }
    console.log(score);
    setCurrentQuestion(currentQuestion + 1)
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].correct_answer === answerChosen) {
      setScore(score + 1);
    }
    setQuizState('endScreen');
  }

  return (
    <div>
      <StyleActiveSpan>{currentQuestion + 1}</StyleActiveSpan>
      <StyleSpan>/10</StyleSpan>
      <StyleQuestion>{Questions[currentQuestion].question}</StyleQuestion>
        <StyleAnswer>
          <ul>
            <StyleAnswerText onClick={() => setAnswerChosen('A')}>{Questions[currentQuestion].answers[0]}</StyleAnswerText>
            <StyleAnswerText onClick={() => setAnswerChosen('B')}>{Questions[currentQuestion].answers[1]}</StyleAnswerText>
            <StyleAnswerText onClick={() => setAnswerChosen('C')}>{Questions[currentQuestion].answers[2]}</StyleAnswerText>
            <StyleAnswerText onClick={() => setAnswerChosen('D')}>{Questions[currentQuestion].answers[3]}</StyleAnswerText>
          </ul>
        </StyleAnswer>
      <StyleBtnBox>
        {currentQuestion == Questions.length - 1 ? (
            <StyleBtnFinish onClick={finishQuiz}>Finish</StyleBtnFinish>
          ) : (
            <StyleBtn onClick={nextQuestion}>Next</StyleBtn>
        )}
      </StyleBtnBox>
    </div>
  )
}

export default QuizBody;
