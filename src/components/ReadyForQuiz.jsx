import styled from "styled-components";
import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const StyleReadyForQuiz = styled.div`
float: left;
font-family: monospace;
color: #2d264b;
height: 700px;
width: 50%;
padding-top: 70px;
position: fixed;
color: rgb(185, 189, 196);
`

const StyleButton = styled.button`
margin-left: 80px;
margin-top: 20px;
color: white;
border-radius: 12px;
background: #d08642;
width: 250px;
height: 70px;
`

const ReadyForQuiz = (props) => {
    const { quizState, setQuizState } = useContext(QuizContext);

  return (
    <div>
      <StyleReadyForQuiz>
        <StyleButton {...props} onClick={() => {setQuizState('quiz')}}>Ready?</StyleButton>
      </StyleReadyForQuiz>
    </div>
  )
}

export default ReadyForQuiz;
