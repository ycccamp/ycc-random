import React, {Component, useState, useEffect} from 'react'
import styled, {keyframes} from 'styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/th'
dayjs.locale('th')

const Zoom = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  width: 100%;
  height: 100vh;

  h1 {
    animation: ${Zoom} 0.5s alternate infinite ease-in;
    font-size: 18em;
    color: white;
  }
`

function seconds2time(seconds: number) {
  var hours = Math.floor(seconds / 3600)
  var minutes = Math.floor((seconds - hours * 3600) / 60)
  var seconds = seconds - hours * 3600 - minutes * 60
  var time = ''

  if (hours != 0) {
    time = hours + ':'
  }
  if (minutes != 0 || time !== '') {
    let minutesString =
      minutes < 10 && time !== '' ? '0' + minutes : String(minutes)
    time += minutesString + ':'
  }
  if (time === '') {
    time = seconds + 's'
  } else {
    time += seconds < 10 ? '0' + seconds : String(seconds)
  }
  return time
}

class Timer extends Component {
  constructor(props: Readonly<{}>) {
    super(props)
  }

  state = {
    time: 'Loading...'
  }

  componentDidMount() {
    setInterval(() => {
      let endTime = dayjs('2019-03-31 13:00:00')
      let now = dayjs()
      let difference = endTime.diff(now, 'second')
      this.setState({
        time: seconds2time(difference)
      })
    }, 1000)
  }

  render() {
    return (
      <TimerContainer>
        <h1>{this.state.time}</h1>
      </TimerContainer>
    )
  }
}

export default Timer
