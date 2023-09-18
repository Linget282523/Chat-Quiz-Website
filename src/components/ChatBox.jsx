
import styled from 'styled-components';
import Message from './Message';


const StyleChatBox = styled.div`
margin: 60px 0 120px 30px;
`


const ChatBox = () => {

  return (
    <div>
      <StyleChatBox>
        <div>
            <Message />
          <div ></div>
        </div>
      </StyleChatBox>
    </div>
  )
}

export default ChatBox;
