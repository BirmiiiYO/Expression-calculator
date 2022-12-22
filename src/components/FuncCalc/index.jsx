import React from 'react'

import ControlPanel from '../ControlPanel'
import Display from '../Display'
import Wrapper from './styles'

export default function FuncComp() {
  return (
    <Wrapper>
      <Display />
      <ControlPanel />
    </Wrapper>
  )
}
