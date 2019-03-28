import React, {Component, Suspense} from 'react'
import styled, {keyframes} from 'styled-components'
import fiery from 'fiery'
import {signIn, signOut} from './fire'

import Profile from './Profile'

import logo from './logo.png'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #99ccff, #ffffff);
  text-align: center;
`

const Zoom = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1.1);
  }
`

const ZoomRotate = keyframes`
  from {
    transform: scale(0.9) rotate(0deg);
  }
  to {
    transform: scale(1.1) rotate(15deg);
  }
`

const Logo = styled.img`
  animation: ${ZoomRotate} 0.5s alternate infinite ease-in;
  max-width: 300px;
`

const Button = styled.a`
  animation: ${Zoom} 0.5s alternate infinite ease-in;
  font-family: 'FC Lamoon';
  font-size: 1.8rem;
  text-decoration: none;
  color: black;
  padding: 7px 40px;
  border-radius: 13.5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.27);
  display: inline-block;
  cursor: pointer;
  background-color: #fff66d;
`

const IndexPage = () => {
  const userState = fiery.useFirebaseAuth()
  return (
    <>
      <Logo src={logo} />
      <h1>Young Creator's Camp</h1>
      {userState.loading ? (
        <Button>Loading...</Button>
      ) : userState.failed ? (
        <Button onClick={userState.retry}>Try again!</Button>
      ) : (
        userState.data && <Button onClick={signIn}>Sign in</Button>
      )}
    </>
  )
}

const App = () => {
  const userState = fiery.useFirebaseAuth()

  return (
    <Container>
      {userState.data ? (
        <div>
          <Profile />
        </div>
      ) : (
        <IndexPage />
      )}
    </Container>
  )
}

export default App
