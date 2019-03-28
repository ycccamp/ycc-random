import React, {Component, Suspense, useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'
import fiery from 'fiery'
import firebase from 'firebase'
import {signIn, signOut} from './fire'

import Profile from './Profile'
import Loading from './Loading'

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

const Title = styled.h1`
  animation: ${Zoom} 0.5s alternate infinite ease-in;
`

const Background = styled.div`
  background-color: ${props => props.color};
  width: 100%;
  height: 100%;
`

const IndexPage = () => {
  const userState = fiery.useFirebaseAuth()
  return (
    <>
      <Logo src={logo} />
      <Title>Young Creator's Camp</Title>
      {userState.loading ? (
        <Button>Loading...</Button>
      ) : userState.failed ? (
        <Button onClick={userState.retry}>Try again!</Button>
      ) : userState.data ? (
        <Button onClick={signOut}>Sign out</Button>
      ) : (
        <Button onClick={signIn}>Sign in</Button>
      )}
    </>
  )
}

const Announcement: React.FunctionComponent<{color: string}> = ({color}) => {
  return <Background color={color} />
}

const ProfileWrapper: React.FunctionComponent<{id: string}> = ({id}) => {
  const dataRef = firebase.database().ref(`config/show`)
  const dataState = fiery.useFirebaseDatabase(dataRef)
  const colorRef = firebase.database().ref(`team/${id}`)
  const colorState = fiery.useFirebaseDatabase(colorRef)

  const [ready, setReady] = useState(false)
  const [color, setColor] = useState('')

  useEffect(() => {
    if (colorState.data) {
      setColor(colorState.data)
    }

    setReady(dataState.data)
  }, [dataState.data, colorState.data])

  return (
    <>
      {ready ? <Announcement color={color} /> : <Profile />}
      <div style={{display: 'none'}}>
        {dataState.unstable_read()}
        {colorState.unstable_read()}
      </div>
    </>
  )
}

const App = () => {
  const userState = fiery.useFirebaseAuth()

  return (
    <Container>
      <Suspense fallback={<Loading />}>
        {userState.data ? (
          <ProfileWrapper id={userState.data.uid} />
        ) : (
          <IndexPage />
        )}
      </Suspense>
    </Container>
  )
}

export default App
