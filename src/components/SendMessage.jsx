import React, { useState } from 'react';
import styled from 'styled-components';
import { UserAuth } from '../context/AuthContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const FormSandMessage = styled.form`
position: fixed;
height: 100px;
bottom: 0;
width: 50%;
padding-top: 0px; 
padding-bottom: 0px;
background-color:rgb(199, 195, 195);
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
`
const StyleInput = styled.input`
margin: 35px 0 35px 15px;
text-aligh: center;
width: 80%;
height: 30px;
background-color: rgb(224, 222, 222);
border-color: rgb(224, 222, 222);
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
`

const StyleButton = styled.button`
width: 70px;
height: 35px;
border-top-left-radius: 0px;
border-bottom-left-radius: 0px;
`


const SendMessage = () => {
  const [value, setValue] = useState('');
  const {  currentUser } = UserAuth();

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === '') {
      alert('Enter valid message!');
      return;
    }

    try {
      const { uid, displayName } = currentUser;
      await addDoc(collection(db, 'messages'), {
        text: value,
        name: displayName,
        createdAt: serverTimestamp(),
        uid
      })
    } catch (error) {
      console.log(error);
    }
    setValue('');
  }

  return (
    <div>
      <FormSandMessage onSubmit={handleSendMessage}>
        <StyleInput value={value} onChange={e => setValue(e.target.value)} type='text'/>
        <StyleButton type='submit'>Send</StyleButton>
      </FormSandMessage>
    </div>
  )
}

export default SendMessage;
