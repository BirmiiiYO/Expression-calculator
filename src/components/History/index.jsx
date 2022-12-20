import React from 'react'
import { PropTypes } from 'prop-types'

import { Container, Title, Ul } from './styles'
import { HistoryContext } from '../../App'

export const History = () => {
  const { history } = React.useContext(HistoryContext)
  console.log(history)
  return (
    <Container>
      <Title>History:</Title>
      <Ul type="list">
        {history.length === 0
          ? 'history is empty'
          : history
              .reverse()
              .map(
                ({ firstValue, operator, memory }, i) => (
                  <li key={i}>
                    {firstValue}
                    {operator}
                    {memory}
                  </li>
                ),
              )}
      </Ul>
    </Container>
  )
}
