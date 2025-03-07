import styled from "styled-components"
import Tags from "./components/Tags/Tags"
import Timer from "./components/Timer/Timer"

function App() {
  return (
    <>
      <Title>Pomodoro Timer</Title>
      <Tags />
      <Timer />
      {/* Setting icons */}
    </>
  )
}

export default App

const Title = styled.h1`
  font-size: 4.5rem;
  padding: 2rem 0;
  text-align: center;
`