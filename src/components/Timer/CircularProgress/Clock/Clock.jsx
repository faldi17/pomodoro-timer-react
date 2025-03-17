import { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { StateContext } from '../../../StateProvider';

const Clock = () => {
    const { time, setTime, isActive, setIsActive, initTime } =
        useContext(StateContext);

    useEffect(() => {
        if (isActive && time > 0) {
            const interval = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [time, isActive]);

    const resetTime = () => {
        setTime(initTime);
        setIsActive(false);
    };

    const toggleClock = () => {
        setIsActive(!isActive);
    };

    const getTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
    };

    return (
        <>
            <ClockContainer>
                <TimerText>{getTime(time)}</TimerText>
                {time !== 0 && (
                    <StartPauseButton onClick={toggleClock}>
                        {isActive ? 'Pause' : 'Start'}
                    </StartPauseButton>
                )}
                {time === 0 && (
                    <ResetButton onClick={resetTime}>Reset</ResetButton>
                )}
            </ClockContainer>
        </>
    );
};

export default Clock;

const ClockContainer = styled.div`
    display: grid;
    place-items: center;
`;

const TimerText = styled.h3`
    font-size: 8rem;
`;

const StartPauseButton = styled.button`
    background: ${(props) => props.theme.colors.primary};
    color: #ffffff;
    border: none;
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.8rem;
`;

const ResetButton = styled(StartPauseButton)`
    background-color: black;
`;
