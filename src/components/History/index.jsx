import React from 'react'

import { HistoryContext } from '@src/App'
import { Container, Item, List, Title } from './styles'

export function History() {
  return (
    <Container>
      <Title>History:</Title>
      <HistoryContext.Consumer>
        {(context) => (
          <List type="list">
            {context.history.length === 0
              ? 'history is empty'
              : context.history
                  .reverse()
                  .map((item, i) => (
                    <Item key={i}>{item}</Item>
                  ))}
          </List>
        )}
      </HistoryContext.Consumer>
    </Container>
  )
}
