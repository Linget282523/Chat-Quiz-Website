import styled from "styled-components";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { Questions } from "../context/QuestionBank";


const StyleResultBox = styled.div`
display: flex;
justify-cintent: center;
margin-left: 130px;
aling-items: center;
margin-top: 20px;
`

const StyleTitle = styled.div`
font-size: 32px;
font-weight: 700;
padding-top: 17px;
margin-left: -40px;

color: #150080;

`

const StyleScore = styled.h3`
font-size: 18px;
font-weight: 500;
color: #150080;
margin-left: 45px;
`

const StyleBtn = styled.button`
font-size: 18px;
width: 170px;
height: 60px;
margin-left: -10px;
`

const EndScreen = () => {
  const { score, setScore, setQuizState } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0)
    setQuizState('start');
  }
  return (
    <div>
      <StyleResultBox><StyleTitle>Quiz Finished</StyleTitle></StyleResultBox>
      <StyleResultBox><StyleScore>{score} / {Questions.length}</StyleScore></StyleResultBox>
      <StyleResultBox><StyleBtn onClick={restartQuiz}>Restart Quiz</StyleBtn></StyleResultBox>

      
      
    </div>
  )
}

export default EndScreen;
