import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Clock = () => {
    const [time, setTime] = useState(600)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (isActive && time > 0) {
            const interval = setInterval(() => {
                setTime((time) => time - 1)
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [time, isActive])

    const toggleClock = () => {
        setIsActive(!isActive)
    }

    const getTime = (time) => {
        const min = Math.floor(time / 60)
        const sec = time % 60
        return `${min < 10 ? "0" + min : min}:${sec < 10? "0" + sec : sec}`
    }
    
    return (
        <>
            <ClockContainer>
                <TimerText>{ getTime(time) }</TimerText>
                <StartPauseButton onClick={toggleClock}>
                    {isActive? "Pause" : "Start"}
                </StartPauseButton>
            </ClockContainer>
        </>
    )
}

export default Clock

const ClockContainer = styled.div`
    display: grid;
    place-items: center;
`

const TimerText = styled.h3`
    font-size: 8rem;
`

const StartPauseButton = styled.button`
    background: ${(props) => props.theme.colors.primary};
    color: #ffffff;
    border: none;
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.8rem;
`