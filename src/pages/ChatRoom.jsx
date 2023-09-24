import ChatBox from '../components/ChatBox'
import Quiz from '../components/Quiz'
import SendMessage from '../components/SendMessage'
import styled from 'styled-components'

const StyleChatQuiz = styled.div`
clear: both;
justify-content: space-between;
`

const StyleChatRoom = styled.div`
float: right;
width: 50%;
color: white;
`
const StyleQuiz = styled.div `
float: left;
font-family: monospace;
color: #2d264b;
height: 700px;
width: 50%;
padding-top: 70px;
position: fixed;
color: rgb(185, 189, 196);
`

const ChatRoom = () => {
  return (
    <div className='grid-container'>
      <StyleChatQuiz className='grid-item'>
        <StyleChatRoom>
          <ChatBox/>
          <SendMessage/>
        </StyleChatRoom>
        <StyleQuiz className='grid-item'>
          <Quiz/>
        </StyleQuiz>
      </StyleChatQuiz>
    </div>
  )
}

export default ChatRoom
