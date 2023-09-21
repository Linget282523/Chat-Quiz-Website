// import React, { useState } from 'react';
import styled from 'styled-components';

const StyleQuizWripper = styled.div`
margin-top: 20px;
margin-bottom: 20px;
margin-left: 50px;
padding: 20px 40px;
width: 500px;
background: #ffffff;
border-radius: 4px;
box-sizing: border-box;
`
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
font-size: 16px;
font-weight: 500;
margin: 0;
color: #150080;
margin-top: -20px;
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
`

const Quiz = ({questions}) => {
  // const [ currentQuestin, setCurrentQuestion ] = useState(0);

  // const { question, choices, correntAnswer } = questions[currentQuestin];

  return (
    <div>
        <StyleQuizWripper>
          <StyleActiveSpan>1</StyleActiveSpan>
          <StyleSpan>/5</StyleSpan>
          <StyleQuestion><h2>Question</h2></StyleQuestion>
          <StyleAnswer>
            <ul>
              <StyleAnswerText><li>grsgffffffff fffffffff ffffffffffff ffffffff fffffsrg</li></StyleAnswerText>
              <StyleAnswerText><li>grsgsrg fhsdjkfsd fnsdjfnskd fdsnfnskd fnsdkflsd fnsdjflsd fnmdss fndsmf,s fdsmfsd fdsmf,s </li></StyleAnswerText>
              <StyleAnswerText><li>grsgsdddddd ddddddddd ddddddd dddddddd dddddddd ddddrg</li></StyleAnswerText>
              <StyleAnswerText><li>grsgjjjjjjj jjjjj jjjjjjjjjjj jjjjjjjjjjjj jjjjjsrg hfjsdfjskd fdbsfjsd fajfsdkjf fjsdfksd fsdjfks</li></StyleAnswerText>
            </ul>
          </StyleAnswer>
        </StyleQuizWripper>
    </div>
  )
}

export default Quiz;
