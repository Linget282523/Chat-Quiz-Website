import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

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
color: white;
border-radius: 12px;
background: #d08642;
`

const ReadyForQuiz = (props) => {
    const { currentUser } = UserAuth();

    const handleReadyForQuiz = async (e) => {
        e.preventDefault();

        try {
            const { uid, userReadiness } = currentUser;
            await addDoc(collection(db, 'readiness'), {
              state: userReadiness,
              createdAt: serverTimestamp(),
              uid
            })
          } catch (error) {
            console.log(error);
          }
    }
    
  return (
    <div>
      <StyleReadyForQuiz onSubmit={handleReadyForQuiz}> 
        <NavLink to='/chat'><StyleButton {...props}>Ready?</StyleButton></NavLink>
      </StyleReadyForQuiz>
    </div>
  )
}

export default ReadyForQuiz;