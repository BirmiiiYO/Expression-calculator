import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { btnValues } from '../../constants/keyboard'

import { Container, Button, Row } from './styles'

export const ControlPanel = ({ handleClick }) => {
  const onButtonClick = (value) => () => {
    handleClick(value)
  }
  return (
    <Container>
      {btnValues.map((row, i) => (
        <Row key={i}>
          {row.map((value) => (
            <Button
              key={value}
              type={value}
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
  handleClick: PropTypes.func,
}
