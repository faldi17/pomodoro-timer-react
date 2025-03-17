import styled from 'styled-components';
import Tags from './components/Tags/Tags';
import Timer from './components/Timer/Timer';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import { FaCog } from 'react-icons/fa';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} />
            <Title>Pomodoro Timer</Title>
            <Tags />
            <Timer />
            {/* Setting icons */}
            <CogIcon onClick={onOpen}>
                <FaCog />
            </CogIcon>
        </>
    );
}

export default App;

const Title = styled.h1`
    font-size: 4.5rem;
    padding: 2rem 0;
    text-align: center;
`;

const CogIcon = styled.div`
    display: flex;
    justify-content: center;
    font-size: 4rem;
`