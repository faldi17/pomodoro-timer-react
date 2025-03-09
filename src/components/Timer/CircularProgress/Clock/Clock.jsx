import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Clock = () => {
    const [time, setTime] = useState(10)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((time) => time - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])
    
    return (
        <>
            <ClockContainer>
                <TimerText>{ time }</TimerText>
                <StartPauseButton>Pause</StartPauseButton>
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