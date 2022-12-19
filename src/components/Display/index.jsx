import React from 'react'
import PropTypes from 'prop-types'
import { DisplayText } from './styles'

export const Display = ({ firstValue, memory }) => {
  return (
    <DisplayText id="display">
      {firstValue || memory}
    </DisplayText>
  )
}

Display.propTypes = {
  firstValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  memory: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}
