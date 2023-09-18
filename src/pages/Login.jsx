import { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
display: flex;
justify-content:center;
`;


const Login  = () => {
    const navigate = useNavigate();
    const { currentUser, signinWithGoogle } = UserAuth();

    const handleLogin = async () => {
        try {
            await signinWithGoogle();
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(currentUser) {
            navigate('/chat')
        }
    }, [currentUser]);
 
    return (
        <div>
        <Container>
            <Button onClick={handleLogin}>LOG IN</Button>
        </Container>
        </div>
    )

};

export default Login;
