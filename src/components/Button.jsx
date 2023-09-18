import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
background: transparent;
border-radius: 10px;
border: 3px solid rgb(31, 97, 144);
background: #d08642;
padding: 0.25em 1em;
justify-content: center;
text-align: center;
height: 70px;
width: 200px;
`;


const Button = (props) => {
  return (
    <StyleButton {...props}/>
  )
}

export default Button;
