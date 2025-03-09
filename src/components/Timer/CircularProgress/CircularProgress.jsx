import { useState } from 'react'
import styled from 'styled-components'
import Clock from './Clock/Clock'

const CircularProgress = () => {
    const [progress, setProgress] = useState(55)

    return (
        <>
            <OuterCircle progress={progress}>
                <InnerCircle>
                    <Clock />
                </InnerCircle>
            </OuterCircle>
        </>
    )
}

export default CircularProgress

const OuterCircle = styled.div`
    height: 35rem;
    width: 35rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: conic-gradient(
        ${(props) => props.theme.colors.primary} ${({ progress }) => progress}%,
        transparent ${({ progress }) => progress}%
    );
`

const InnerCircle = styled.div`
    background: ${(props) => props.theme.colors.secondary};
    height: 33rem;
    width: 33rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
`