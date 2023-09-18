
import styled from 'styled-components';


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

  return (
    <div>
      <FormSandMessage >
        <StyleInput/>
        <StyleButton type='submit'>Send</StyleButton>
      </FormSandMessage>
    </div>
  )
}

export default SendMessage;
