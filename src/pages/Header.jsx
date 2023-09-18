import styled from 'styled-components'

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

  return (
    <div>
        <StyleHeader>
          <div className='btn-header'>
             <StyleButton >Log Out</StyleButton>
          </div>
        </StyleHeader>
    </div>
  )
}

export default Header
