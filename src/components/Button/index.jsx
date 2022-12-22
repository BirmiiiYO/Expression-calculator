import PropTypes from 'prop-types'
import React from 'react'

import ButtonContainer from './styles'

export default function Button({ value, handleClick }) {
  const onButtonClick = () => () => {
    handleClick(value)
  }
  return (
    <ButtonContainer
      onClick={onButtonClick(value)}
      value={value}
      key={value}>
      {value}
    </ButtonContainer>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}
