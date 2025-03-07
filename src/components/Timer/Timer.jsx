import styled from 'styled-components'
import CircularProgress from './CircularProgress/CircularProgress'

const Timer = () => {
  return (
    <>
        <TimerContainer>
            <CircularProgress />
        </TimerContainer>
    </>
  )
}

export default Timer

const TimerContainer = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  height: 45rem;
  width: 45rem;
  margin: 2rem auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
`