import React from 'react'
import { PropTypes } from 'prop-types'

import { Container, Title, List, Item } from './styles'
import { HistoryContext } from '../../App'

export function History() {
  const { history } = React.useContext(HistoryContext)
  console.log(history)
  return (
    <Container>
      <Title>History:</Title>
      <List type="list">
        {history.length === 0
          ? 'history is empty'
          : history
              .reverse()
              .map(
                ({ firstValue, operator, memory }, i) => (
                  <Item key={i}>
                    {firstValue}
                    {` ${operator} `}
                    {memory}
                  </Item>
                ),
              )}
      </List>
    </Container>
  )
}
