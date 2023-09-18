import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Message from './Message';
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from '../firebase';

const StyleChatBox = styled.div`
margin: 60px 0 120px 30px;
`


const ChatBox = () => {
  const messagesEndRef = useRef();
  const [messages, setMassages] = useState([]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({befavior: 'smooth'})
  };

  useEffect(scrollToBottom, [messages])

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy('createdAt'),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id});
      });
      setMassages(messages);
    });

    return () => unsubscribe;
  }, []);


  return (
    <div>
      <StyleChatBox>
        <div>
          {messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef}></div>
        </div>
      </StyleChatBox>
    </div>
  )
}

export default ChatBox;
