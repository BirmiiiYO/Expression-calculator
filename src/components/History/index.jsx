import React from 'react'

import { Container, Item, List, Title } from './styles'

export default function History() {
  return (
    <Container>
      <Title>History:</Title>
      <List type="list">
        {history.length === 0
          ? 'history is empty'
          : history
              .reverse()
              .map(({ firstValue, operator, memory }) => (
                <Item>
                  {firstValue}
                  {` ${operator} `}
                  {memory}
                </Item>
              ))}
      </List>
    </Container>
  )
}
