import React from 'react'
import PropTypes from 'prop-types'

import { ButtonContainer } from './styles'

export const Button = ({ value, handleClick, type }) => {
  const onButtonClick = (value) => () => {
    handleClick(value)
  }

  return (
    <ButtonContainer
      className={type || ''}
      onClick={onButtonClick(value)}
      value={value}
      key={value}
      type={type}
      data-name={value === '.' ? 'coma' : null}>
      {value}
    </ButtonContainer>
  )
}

Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string,
}
