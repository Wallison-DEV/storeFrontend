import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import { Container } from './styles';

const Rotas = () => {
    return (
        <Container>
            <Routes>
                <Route path='/' element={<Login />} />
            </Routes>
        </Container>
    )
}

export default Rotas
