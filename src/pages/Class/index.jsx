import React from 'react'
import PropTypes from 'prop-types'
import close from '../../assets/back-arrow.png'
import open from '../../assets/forward-arrow.png'
import { Display, ControlPanel } from '../../components'
import { Container, Left, Right, Button } from './styles'
import { History } from '../../components/History'

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
          zxc
          {/* <Display currentValues={currentValues} />

          <Keypad
            currentValues={currentValues}
            setCurrentValues={setCurrentValues}
          /> */}
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
