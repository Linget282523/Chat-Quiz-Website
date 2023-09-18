import styled from 'styled-components';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Login from './pages/Login';
import Header from './pages/Header';
import ChatRoom from './pages/ChatRoom';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

const AppWrapper = styled.div`
display: grid;
width: 100%;
min-height: 100vh;
background: linear-gradient(0deg, #150080 0.03%, #d08642);
`


function App() {
  const store = useSelector(store => store);
  console.log(store);
  const dispatch = useDispatch();


  return (
      <AppWrapper>
        <AuthProvider>
          <Header/>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/chat' element={<PrivateRoute><ChatRoom/></PrivateRoute>}/>
          </Routes>
        </AuthProvider>
      </AppWrapper>
  );
}

export default App;
