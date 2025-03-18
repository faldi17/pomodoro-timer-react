import { useEffect, useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../../StateProvider";
import beepSound from "../../../../assets/beep.mp3";

const Clock = () => {
    const { time, setTime, isActive, setIsActive, initTime } =
        useContext(StateContext);

    useEffect(() => {
        if (!isActive) return;
        
        const interval = setInterval(() => {
            setTime((prevTime) => {
                if ( prevTime <= 1){
                    clearInterval(interval);
                    playSound();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isActive, setTime]);

    const playSound = () => {
        const audio = new Audio(beepSound);
        audio.play();
    }

    const resetTime = () => {
        setTime(initTime);
        setIsActive(false);
    };

    const toggleClock = () => {
        setIsActive((prev) => !prev);
    };

    const getTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
    };

    return (
        <>
            <ClockContainer>
                <TimerText>{getTime(time)}</TimerText>
                {time !== 0 && (
                    <StartPauseButton onClick={toggleClock}>
                        {isActive ? "Pause" : "Start"}
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
