import { Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import styled from "styled-components";
import { StateContext } from "../StateProvider";

function ModalContainer({ isOpen, onClose }) {
    const {
        workTime,
        setWorkTime,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setLongBreakTime,
    } = useContext(StateContext);

    if (!isOpen) return null;

    return (
        <Container>
            <ModalContent
                initial={{ y: "-100vh", scale: 0 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: "-100vh", scale: 0 }}
            >
                <ModalHeader>
                    <ModalTitle>Settings</ModalTitle>
                    <ModalCloseButton onClick={onClose}>
                        <FaWindowClose fontSize="2rem" color="red" cursor="pointer" />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            work: workTime / 60,
                            short: shortBreakTime / 60,
                            long: longBreakTime / 60,
                        }}
                        onSubmit={(values) => {
                            setWorkTime(values.work * 60);
                            setShortBreakTime(values.short * 60);
                            setLongBreakTime(values.long * 60);
                            onClose();
                        }}
                    >
                        <Form>
                            <InputWrapper>
                                <FormControl>
                                    <label htmlFor="work">Work</label>
                                    <Field name="work" min="1" max="60" />
                                </FormControl>
                                <FormControl>
                                    <label htmlFor="short">Short Break</label>
                                    <Field name="short" min="1" max="60" />
                                </FormControl>
                                <FormControl>
                                    <label htmlFor="long">Long Break</label>
                                    <Field name="long" min="1" max="60" />
                                </FormControl>
                            </InputWrapper>
                            <ApplyButton type="submit">Apply</ApplyButton>
                        </Form>
                    </Formik>
                </ModalBody>
            </ModalContent>
        </Container>
    );
}

export default ModalContainer;

const ApplyButton = styled.button`
    all: unset;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    background: ${(props) => props.theme.colors.bg};
    border-radius: 0.8rem;
    display: flex;
    margin: auto;
    cursor: pointer;
`;

const InputWrapper = styled.div`
    display: block;
    padding-bottom: 1rem;
`;
const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    margin-bottom: 1rem;
    gap: 0.5rem;
    label {
        font-size: 1.8rem;
    }
    input {
        font-size: 1.8rem;
        padding: 0.5rem;
        border-radius: 0.6rem;
        border: 1px solid ${(props) => props.theme.colors.bg};
        background: white;
        &:focus {
            outline: 1px solid ${(props) => props.theme.colors.bg};
        }
    }
`;

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
    height: 34rem;
    border-radius: 10px;
`;

const ModalHeader = styled.div`
    color: #000000;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
`;

const ModalTitle = styled.h3`
    font-size: 2rem;
`;

const ModalCloseButton = styled.button`
    all: unset;
`;

const ModalBody = styled.div`
    padding: 1rem;
`;
