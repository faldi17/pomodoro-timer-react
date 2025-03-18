import { motion } from 'framer-motion';
import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import styled from 'styled-components';

function ModalContainer({ isOpen, onClose }) {
    return (
        <Container>
            <ModalContent
                initial={{ y: '-100vh', scale: 0 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: '-100vh', scale: 0 }}>
                <ModalHeader>
                    <ModalTitle>Settings</ModalTitle>
                    <ModalCloseButton onClick={onClose}>
                        <FaWindowClose fontSize="3rem" />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody></ModalBody>
            </ModalContent>
        </Container>
    );
}

export default ModalContainer;

const Container = styled.div`
    position: absolute;
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 150;
`;

const ModalContent = styled(motion.div)`
    background-color: #ffffff;
    width: 45rem;
    height: 40rem;
    border-radius: 10px;
`;

const ModalHeader = styled.div`
    color: #000000;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
`;

const ModalTitle = styled.h3`
    font-size: 3rem;
`;

const ModalCloseButton = styled.button`
    all: unset;
`;

const ModalBody = styled.div``;
