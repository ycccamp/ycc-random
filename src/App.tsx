import React, {Component, Suspense} from 'react'
import styled from 'styled-components'
import fiery from 'fiery'
import firebase from 'firebase'

import logo from './logo.png'

function signIn() {
  firebase
    .auth()
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .catch(e => window.alert(`Sorry, cannot sign in! ${e}`))
}

function signOut() {
  if (window.confirm('RLY SIGN OUT?')) firebase.auth().signOut()
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top, #99ccff, #ffffff);
  text-align: center;
`

const Logo = styled.img`
  @keyframes zoom {
    0% {
      transform: scale(0.9) rotate(0deg);
    }
    100% {
      transform: scale(1.1) rotate(15deg);
    }
  }
  animation: zoom 0.5s alternate infinite ease-in;
`

const Button = styled.a`
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
      ) : userState.data ? (
        <div onClick={signOut}>Logged in</div>
      ) : (
        <Button onClick={signIn}>Sign in</Button>
      )}
    </>
  )
}

const App = () => {
  const userState = fiery.useFirebaseAuth()

  return (
    <Container>
      <Suspense fallback={<div>lelelelelelelel</div>}>
        {userState.data ? (
          <div>
            <IndexPage />
            {userState.data.displayName}
          </div>
        ) : (
          <IndexPage />
        )}
      </Suspense>
    </Container>
  )
}

export default App
