import { useState } from 'react'
import { PropTypes } from 'prop-types'

import { Display, ControlPanel } from '../../components'

import { Container } from './styles'

export const FuncCalc = ({ setHistory, addToHistory }) => {
  const [expr, setExpr] = useState('')
  return (
    <Container>
      <Display expr={expr} />
      <ControlPanel
        expr={expr}
        setExpr={setExpr}
        setHistory={setHistory}
        addToHistory={addToHistory}
      />
    </Container>
  )
}

FuncCalc.propTypes = {
  setHistory: PropTypes.func.isRequired,
  addToHistory: PropTypes.func.isRequired,
}
