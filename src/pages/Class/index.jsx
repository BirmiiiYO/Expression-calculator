import React from 'react'

import close from '../../assets/back-arrow.png'
import open from '../../assets/forward-arrow.png'

import { Container, Left, Right, Button } from './styles'
import { History } from '../../components/History'
import { ClassComp } from '../../components/ClassCalc'

export class ClassCalc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }
  toggleHistory = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }))
  }
  render() {
    return (
      <Container>
        <Left>
          <ClassComp />
        </Left>

        <Button onClick={this.toggleHistory}>
          <img
            src={this.state.isOpen ? close : open}
            width={30}
            height={30}
          />
        </Button>

        {this.state.isOpen ? (
          <Right>
            <History />
          </Right>
        ) : null}
      </Container>
    )
  }
}
