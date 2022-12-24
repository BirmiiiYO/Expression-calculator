import React from 'react'

import close from '@assets/back-arrow.png'
import open from '@assets/forward-arrow.png'

import { History } from '@components/History'
import { ClassCalculator } from '@components/ClassCalc'

import { Button, Container, Left, Right } from './styles'

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
          <img
            src={isOpen ? close : open}
            width={30}
            height={30}
            alt="arrow"
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
}
