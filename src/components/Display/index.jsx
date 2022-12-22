import PropTypes from 'prop-types'
import React from 'react'

import DisplayText from './styles'

export default function Display({ firstValue, memory }) {
  return (
    <DisplayText>
      <h1>{memory}</h1>
      <h2>{firstValue}</h2>
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
  ]).isRequired,
}
Display.defaultProps = {
  firstValue: '',
}
