import { useState } from 'react'
import styled from 'styled-components'

const CircularProgress = () => {
    const [progress, setProgress] = useState(55)

    return (
        <>
            <OuterCircle progress={progress}>
                <InnerCircle></InnerCircle>
            </OuterCircle>
        </>
    )
}

export default CircularProgress

const OuterCircle = styled.div`
    background: ${(props) => props.theme.colors.primary};
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
    height: 32rem;
    width: 32rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
`