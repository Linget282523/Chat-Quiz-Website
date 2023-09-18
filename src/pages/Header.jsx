import styled from 'styled-components'
import { UserAuth } from '../context/AuthContext';

const StyleHeader = styled.header`
position: fixed;
z-index: 10;
justify-content: right;
height: 50px;
width: 100%;
background: #150080;
`;

const StyleButton = styled.button`
width: 80px;
height: 30px;
margin: 10px;
`

const Header = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <StyleHeader>
          <div className='btn-header'>
            {currentUser ? <StyleButton onClick={handleLogout}>Log Out</StyleButton> : ''}
          </div>
        </StyleHeader>
    </div>
  )
}

export default Header
