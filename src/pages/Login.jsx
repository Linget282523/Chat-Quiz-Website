import styled from 'styled-components';
import Button from '../components/Button';


const Container = styled.div`
display: flex;
justify-content:center;
`;


const Login  = () => {
 
    return (
        <div>
        <Container>
            <Button>LOG IN</Button>
        </Container>
        </div>
    )

};

export default Login;
