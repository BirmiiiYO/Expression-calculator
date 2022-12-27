import React from 'react'

import close from '@assets/back-arrow.png'
import open from '@assets/forward-arrow.png'

import { FunctionalCalculator } from '@components/FuncCalc'
import { History } from '@components/History'

import {
  Button,
  Container,
  Left,
  Right,
  Image,
} from '@styles/stylesCalc'

export const FuncCalc = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleHistory = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Container>
      <Left>
        <FunctionalCalculator />
      </Left>
      <Button onClick={toggleHistory}>
        <Image src={isOpen ? close : open} alt="arrow" />
      </Button>
      {isOpen && (
        <Right>
          <History />
        </Right>
      )}
    </Container>
  )
}
