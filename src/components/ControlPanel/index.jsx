import { btnValues } from '@constants/keyboard'
import PropTypes from 'prop-types'
import React from 'react'

import { Button, Container, Row } from './styles'

export function ControlPanel({ handleClick }) {
  const onButtonClick = (value) => () => {
    handleClick(value)
  }
  return (
    <Container>
      {btnValues.map((row) => (
        <Row key={row.id}>
          {row.buttons.map((value) => (
            <Button
              key={value}
              onClick={onButtonClick(value)}>
              {value}
            </Button>
          ))}
        </Row>
      ))}
    </Container>
  )
}

ControlPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
}
