import PropTypes from 'prop-types'
import React from 'react'

import DisplayText from './styles'

export default function Display({
  firstValue,
  operator,
  memory,
}) {
  return (
    <DisplayText>
      <span>{firstValue}</span>
      <span>{operator}</span>
      <span>{memory}</span>
    </DisplayText>
  )
}

Display.propTypes = {
  firstValue: PropTypes.string,
  operator: PropTypes.string,
  memory: PropTypes.string,
}
Display.defaultProps = {
  firstValue: '',
  operator: '',
  memory: 'zxc',
}
