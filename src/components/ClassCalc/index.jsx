import React, { Component } from 'react'

import Calculator from '../../utilities/calculator'
import {
  AddCommand,
  DivCommand,
  MulCommand,
  RemCommand,
  SubCommand,
} from '../../utilities/commands'
import deleteLastChar from '../../utilities/deleteLastChar'
import ControlPanel from '../ControlPanel'
import Display from '../Display'
import Wrapper from './styles'

export default class ClassComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstOperand: '0',
      operator: null,
    }
    this.calculator = new Calculator()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(content) {
    const { firstOperand, operator } = this.state

    switch (content) {
      case 'C': {
        this.setState((prevState) => ({
          firstOperand: deleteLastChar(
            prevState.firstOperand,
          ),
        }))
        break
      }
      case 'CE': {
        this.calculator.reset()
        this.setState({ firstOperand: '0' })
        break
      }
      case '+': {
        this.setState({
          operator: '+',
          firstOperand: '',
        })
        break
      }
      case '-': {
        this.setState({
          operator: '-',
          firstOperand: '',
        })
        break
      }
      case '*': {
        this.setState({
          operator: '*',
          firstOperand: '',
        })
        break
      }
      case '/': {
        this.setState({
          operator: '/',
          firstOperand: '',
        })
        break
      }
      case '%': {
        this.setState({
          operator: '%',
          firstOperand: '',
        })
        break
      }
      case '-1': {
        this.calculator.setCurrent(
          parseFloat(firstOperand) * -1,
        )
        this.setState({
          firstOperand: (
            parseFloat(firstOperand) * -1
          ).toString(),
        })
        break
      }
      case '=': {
        if (!operator) break

        if (operator === '+') {
          this.calculator.execute(
            new AddCommand(firstOperand),
          )
        } else if (operator === '-') {
          this.calculator.execute(
            new SubCommand(firstOperand),
          )
        } else if (operator === '*') {
          this.calculator.execute(
            new MulCommand(firstOperand),
          )
        } else if (operator === '/') {
          this.calculator.execute(
            new DivCommand(firstOperand),
          )
        } else if (operator === '%') {
          this.calculator.execute(
            new RemCommand(firstOperand),
          )
        }
        this.setState({
          operator: null,
          firstOperand: this.calculator.getValue(),
        })

        break
      }

      case '.': {
        if (firstOperand.toString().includes('.')) return
        this.setState((prevState) => ({
          firstOperand: `${prevState.firstOperand}.`,
        }))

        break
      }
      default: {
        if (!operator) {
          this.calculator.setCurrent(firstOperand + content)
        }

        this.setState((prevState) => ({
          firstOperand: parseFloat(
            prevState.firstOperand + content,
          ).toString(),
        }))
      }
    }
  }

  render() {
    const { firstOperand } = this.state
    const memory = this.calculator.getValue()

    return (
      <Wrapper>
        <Display
          firstOperand={firstOperand}
          memory={memory}
        />
        <ControlPanel handleClick={this.handleClick} />
      </Wrapper>
    )
  }
}
