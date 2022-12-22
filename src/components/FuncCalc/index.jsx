import React from 'react'
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

export function FuncComp() {
  const [firstOperand, setFirstOperand] =
    React.useState('0')
  const [operator, setOperator] = React.useState(null)
  const calculator = new Calculator()

  const handleClick = (value) => {
    console.log(value)
    switch (value) {
      case 'C': {
        setFirstOperand((prev) => deleteLastChar(prev))
        break
      }
      case 'CE': {
        calculator.reset()
        setFirstOperand('0')
        setOperator(null)
        break
      }
      case '+': {
        setOperator('+')
        setFirstOperand('')

        break
      }
      case '-': {
        setOperator('-')
        setFirstOperand('')

        break
      }
      case '*': {
        setOperator('*')
        setFirstOperand('')

        break
      }
      case '/': {
        setOperator('/')
        setFirstOperand('')

        break
      }
      case '%': {
        setOperator('%')
        setFirstOperand('')

        break
      }
      case '-1': {
        calculator.setCurrent(parseFloat(firstOperand) * -1)
        setFirstOperand(
          (parseFloat(firstOperand) * -1).toString(),
        )
        break
      }
      case '=': {
        if (!operator) break

        if (operator === '+') {
          calculator.execute(new AddCommand(firstOperand))
        } else if (operator === '-') {
          calculator.execute(new SubCommand(firstOperand))
        } else if (operator === '*') {
          calculator.execute(new MulCommand(firstOperand))
        } else if (operator === '/') {
          calculator.execute(new DivCommand(firstOperand))
        } else if (operator === '%') {
          calculator.execute(new RemCommand(firstOperand))
        }
        setOperator(null)
        setFirstOperand(calculator.getValue())
        break
      }

      case '.': {
        if (firstOperand.toString().includes('.')) return
        setFirstOperand((prev) => `${prev  }.`)

        break
      }
      default: {
        if (!operator) {
          calculator.setCurrent(firstOperand + value)
        }
        setFirstOperand((firstOperand + value).toString())
      }
    }
  }

  const memory = calculator.getValue()
  console.log(memory)
  return (
    <Wrapper>
      <Display
        firstOperand={firstOperand}
        memory={memory}
      />
      <ControlPanel handleClick={handleClick} />
    </Wrapper>
  )
}
