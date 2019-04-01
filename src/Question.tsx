import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Loading from './Loading'

const QuestionContainer = styled.div`
  max-width: 450px;
  padding: 40px 30px;
  text-align: left;

  h1 {
    margin: 0;
  }

  ol {
    font-size: 1.4em;
  }
`

const Question: React.FunctionComponent<{match: {params: {id: string}}}> = ({
  match: {
    params: {id}
  }
}) => {
  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState({
    iD: 0,
    q: 'Loading',
    a: 'Loading',
    b: 'Loading',
    c: 'Loading',
    d: 'Loading'
  })

  useEffect(() => {
    axios
      .get('https://api.sheety.co/77393fef-3300-4bd9-9def-b840ec7a0000')
      .then(r => {
        let questions = r.data
        questions = questions.filter((q: {url: string}) => q.url === id)
        if (questions[0]) {
          setQuestions(questions[0])
        } else {
          setQuestions({
            iD: 0,
            q: 'Not Found!',
            a: 'Not Found!',
            b: 'Not Found!',
            c: 'Not Found!',
            d: 'Not Found!'
          })
        }
        setLoading(false)
      })
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <QuestionContainer>
      <h1>
        {questions.iD}. {questions.q}
      </h1>
      <ol>
        <li>{questions.a}</li>
        <li>{questions.b}</li>
        <li>{questions.c}</li>
        <li>{questions.d}</li>
      </ol>
    </QuestionContainer>
  )
}

export default Question
