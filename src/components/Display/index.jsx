import React from 'react'
import PropTypes from 'prop-types'
import {
  DisplayStyled,
  DisplayExpression,
  DisplayRes,
} from './styles'

export default class Display extends React.PureComponent {
  render() {
    const { value, error, result } = this.props
    return (
      <DisplayStyled>
        <DisplayExpression
          data-cy="expression-result"
          error={error}
          result={result}>
          {value}
        </DisplayExpression>
        <DisplayRes data-cy="result" result={result}>
          {result}
        </DisplayRes>
      </DisplayStyled>
    )
  }
}
Display.propTypes = {
  result: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
}
Display.defaultProps = {
  result: '',
  value: '',
  error: '',
}
