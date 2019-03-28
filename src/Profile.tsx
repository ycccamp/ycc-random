import React, {useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'
import fiery from 'fiery'
import {storage} from './index'

const Zoom = keyframes`
  from {
    transform: scale(0.9) ;
  }
  to {
    transform: scale(1.1);
  }
`

const ProfilePhoto = styled.img`
  max-width: 300px;
  margin-top: 20px;
`

const Title = styled.h2`
  animation: ${Zoom} 0.5s alternate infinite ease-in;
`

const Profile = () => {
  const userState = fiery.useFirebaseAuth()

  const [profileUrl, setProfileUrl] = useState('')

  useEffect(() => {
    userState.data &&
      storage
        .ref(`avatar/${userState.data.uid}.jpg`)
        .getDownloadURL()
        .then(setProfileUrl)
  }, [userState.data])

  return (
    <>
      <ProfilePhoto src={profileUrl} />
      <Title>สวัสดีครับ {userState.data && userState.data.displayName}</Title>
      <h4>มารอดูกันอะไรจะเกิดขึ้นเร็วๆนี้~</h4>
    </>
  )
}

export default Profile
