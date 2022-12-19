import { useState } from 'react'
import { PropTypes } from 'prop-types'
import React from 'react'
import { Display, ControlPanel } from '../../components'

import { Container } from './styles'

export const FuncCalc = () => {
  const [expr, setExpr] = useState('')
  return (
    <Container>
      <Display expr={expr} />
      <ControlPanel expr={expr} setExpr={setExpr} />
    </Container>
  )
}
