import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Calculator } from '../../utilities/calculator'

import {
  AddCommand,
  DivCommand,
  MulCommand,
  RemCommand,
  SubCommand,
} from '../../utilities/commands'

import { deleteLastChar } from '../../utilities/deleteLastChar'

import { Wrapper } from './styles'
import { Display } from '../Display'
import { ControlPanel } from '../ControlPanel'
import { HistoryContext } from '../../App'

export class ClassComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstOperand: '0',
      operator: null,
    }
  }
  calculator = new Calculator()

  handleClick = (content) => {
    const { firstOperand } = this.state

    switch (content) {
      case 'C': {
        this.setState(({ firstOperand }) => ({
          firstOperand: deleteLastChar(firstOperand),
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
        const { operator, firstOperand } = this.state
        if (!this.state.operator) break

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
        this.setState(({ firstOperand }) => ({
          firstOperand: firstOperand + '.',
        }))

        break
      }
      default: {
        if (!this.state.operator) {
          this.calculator.setCurrent(
            this.state.firstOperand + content,
          )
        }

        this.setState(({ firstOperand }) => ({
          firstOperand: parseFloat(
            firstOperand + content,
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
