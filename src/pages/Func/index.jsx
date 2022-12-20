import { useState } from 'react'
import { PropTypes } from 'prop-types'
import React from 'react'

import close from '../../assets/back-arrow.png'
import open from '../../assets/forward-arrow.png'

import { Container, Button, Left, Right } from './styles'
import { FuncComp } from '../../components/FuncCalc'
import { History } from '../../components/History'

export const FuncCalc = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleHistory = () => {
    setIsOpen((prevState) => !prevState.isOpen)
  }
  return (
    <Container>
      <Left>
        <FuncComp />
      </Left>

      <Button onClick={toggleHistory}>
        <img
          src={isOpen ? close : open}
          width={30}
          height={30}
        />
      </Button>

      {isOpen ? (
        <Right>
          <History />
        </Right>
      ) : null}
    </Container>
  )
}
