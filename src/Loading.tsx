import React from 'react'
import styled, {keyframes} from 'styled-components'
import logo from './logo.png'

const Zoom = keyframes`
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1.2);
  }
`

const Logo = styled.img`
  animation: ${Zoom} 2s alternate infinite;
  max-width: 300px;
  max-height: 300px;
`

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export default function Loading() {
  return (
    <LoadingWrapper>
      <Logo src={logo} />
    </LoadingWrapper>
  )
}
