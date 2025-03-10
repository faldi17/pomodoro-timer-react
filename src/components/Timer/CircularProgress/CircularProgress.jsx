import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import Clock from './Clock/Clock'
import { StateContext } from '../../StateProvider'

const CircularProgress = () => {
    const { progress, setProgress, time, initTime } = useContext(StateContext)

    useEffect(() => {
        setProgress(time / (initTime / 100))
    }, [setProgress, time, initTime])

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