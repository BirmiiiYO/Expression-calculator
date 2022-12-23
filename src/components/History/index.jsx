import React from 'react'

import { Container, Item, List, Title } from './styles'
// eslint-disable-next-line import/no-cycle
import { HistoryContext } from '../../App'

export default function History() {
  return (
    <Container>
      <Title>History:</Title>
      <HistoryContext.Consumer>
        {(context) => (
          <List type="list">
            {context.history.length === 0
              ? 'history is empty'
              : context.history.reverse().map((item, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Item key={i}>{item}</Item>
                ))}
          </List>
        )}
      </HistoryContext.Consumer>
    </Container>
  )
}
