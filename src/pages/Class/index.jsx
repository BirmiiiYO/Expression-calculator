import React from 'react'

import close from '@assets/back-arrow.png'
import open from '@assets/forward-arrow.png'

import { ClassCalculator } from '@components/ClassCalc'
import { History } from '@components/History'

import {
  Button,
  Container,
  Left,
  Right,
  Image,
} from '@styles/stylesCalc'

export class ClassCalc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.toggleHistory = this.toggleHistory.bind(this)
  }

  toggleHistory() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    const { isOpen } = this.state
    return (
      <Container>
        <Left>
          <ClassCalculator />
        </Left>

        <Button onClick={this.toggleHistory}>
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
}
