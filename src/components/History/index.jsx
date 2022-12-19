import React from 'react'
import { PropTypes } from 'prop-types'

import { Container, Title, Ul } from './styles'

export const History = () => {
  const [history, setHistory] = React.useState(
    JSON.parse(localStorage.getItem('history')) || [],
  )
  const changeHistory = () => {
    setHistory(JSON.parse(localStorage.getItem('history')))
  }
  return (
    <Container>
      <Title>History:</Title>
      <Ul type="list">
        {history.length === 0
          ? 'history is empty'
          : history.map((item, i) => (
              <li key={`${item}_${i}`}>1</li>
            ))}
      </Ul>
    </Container>
  )
}
