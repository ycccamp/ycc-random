import React from 'react'
import styled from 'styled-components'
import {BrowserRouter, Route} from 'react-router-dom'
import IndexPage from './IndexPage'
import Question from './Question'
import Timer from './Timer'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #99ccff, #ffffff);
  text-align: center;
`

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Route exact path="/" component={IndexPage} />
        <Route path="/question/:id" component={Question} />
        <Route exact path="/timer" component={Timer} />
      </BrowserRouter>
    </Container>
  )
}

export default App
