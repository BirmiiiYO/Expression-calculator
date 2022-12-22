/* eslint-disable */
import React from 'react'

import ControlPanel from '../ControlPanel'
import Display from '../Display'
import Wrapper from './styles'

import {
  SecondaryOperators,
  MainOperators,
} from '../../constants/math'

import {
  doCalcExpression,
  checkCommaIsUnique,
  checkLastSignIsOperator,
  generateErrorMsg,
  checkLastSignIsOpenBrackets,
  checkNumberExistAfterLastOpenBracket,
  checkLastSignIsCloseBrackets,
  getLastNumberInExpr,
  numberIsFloat,
} from '../../utilities/mathOperations'

import {
  Calculator,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  RemainderCommand,
  ClearCommand,
} from '../../utilities/calculator'

export class CalculatorWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.calculator = new Calculator()
    this.state = {
      expression: '0',
      currentOperator: '',
      result: '',
      isError: false,
      isFinished: false,
    }
  }

  handleExpressionValue = (value) => {
    switch (value) {
      case SecondaryOperators.CLEAR_ALL:
        console.log(value, ':', typeof value)
        this.handleClearDisplay()
        break

      case SecondaryOperators.COMMA:
        this.handleComma(value)
        break

      case SecondaryOperators.DELETE_LAST:
        console.log(value, ':', typeof value)
        this.handleBackOneSign()
        break

      case SecondaryOperators.OPPOSITE:
        this.handleOppositeSign()
        break

      case SecondaryOperators.OPEN_BRACKET:
        this.handleOpenBracket(value)
        break

      case SecondaryOperators.CLOSE_BRACKET:
        this.handleCloseBracket(value)
        break

      default:
        this.handleNumber(value)
    }
  }

  handleClearDisplay = () => {
    this.setState({
      expression: '0',
      isError: false,
      isFinished: false,
      result: '',
      currentOperator: '',
    })
    this.calculator.executeCommand(new ClearCommand())
  }

  handleComma = (value) => {
    const { expression, isError } = this.state
    const { isCommaAlreadyExist } =
      checkCommaIsUnique(expression)
    if (!isError) {
      if (!isCommaAlreadyExist) {
        this.setState(({ expression }) => ({
          expression: expression + value,
        }))
      }
    }
  }

  handleBackOneSign = () => {
    const { expression, isError } = this.state
    if (!isError) {
      if (expression.length > 1) {
        const cutValue = expression.slice(0, -1)
        this.setState({ expression: cutValue })
      } else {
        this.setState({ expression: '0' })
      }
    }
  }

  handleOppositeSign = () => {
    let curValue = this.state.expression
    const { isError } = this.state
    if (!isError && curValue !== '0') {
      this.setState({
        expression: (Number(curValue) * -1).toString(),
      })
    }
  }

  handleOpenBracket = (value) => {
    const { expression, isFinished, isError } = this.state
    const { lastSignIsOperator } =
      checkLastSignIsOperator(expression)

    if (!isError) {
      if (value === '(' && lastSignIsOperator) {
        this.calculator.executeCommand(new ClearCommand())
        this.setState({ result: '0', currentOperator: '' })
      }

      if (
        (expression.length === 1 && expression === '0') ||
        isFinished
      ) {
        this.setState({
          expression: value,
          isFinished: false,
        })
      } else {
        const lastSign = expression.charAt(
          expression.length - 1,
        )
        const { lastSignIsOperator } =
          checkLastSignIsOperator(expression)
        if (lastSignIsOperator) {
          this.setState({ expression: expression + value })
        } else if (lastSign === '(') {
          this.setState({ expression: expression + value })
        }
      }
    }
  }

  handleCloseBracket = (value) => {
    const { expression, currentOperator } = this.state
    const { lastSignIsOperator } =
      checkLastSignIsOperator(expression)
    const { numberIsExist } =
      checkNumberExistAfterLastOpenBracket(expression)
    if (
      expression.length !== 1 &&
      !lastSignIsOperator &&
      expression.includes('(') &&
      numberIsExist
    ) {
      this.setState({ currentOperator: '' })
      this.handleImmediateResult(currentOperator)
      this.setState({ expression: expression + value })
    }
  }

  handleNumber = (value) => {
    const {
      expression,
      isError,
      isFinished,
      currentOperator,
    } = this.state
    const operators = '+-/*%'
    const curValueIsOperator = operators.includes(value)
    const { lastSignIsOperator } =
      checkLastSignIsOperator(expression)
    const { lastSignIsOpenBracket } =
      checkLastSignIsOpenBrackets(expression)
    const { lastSignIsCloseBracket } =
      checkLastSignIsCloseBrackets(expression)
    const isDoubleZero = value === '00'
    if (curValueIsOperator) {
      this.setState({ currentOperator: value })
    }

    if (expression === '0') {
      if (!isDoubleZero && !curValueIsOperator) {
        this.setState({
          expression: value,
          isFinished: false,
        })
      }
    } else {
      if (isError && !curValueIsOperator) {
        this.setState({ expression: value, isError: false })
      } else if (isFinished && !curValueIsOperator) {
        if (!isDoubleZero) {
          this.setState({
            expression: value,
            isFinished: false,
          })
        }
      } else {
        if (
          !lastSignIsOperator &&
          !isError &&
          !lastSignIsOpenBracket
        ) {
          this.setState(({ expression }) => ({
            expression: expression + value,
            isFinished: false,
          }))
        } else {
          if (!curValueIsOperator) {
            if (!isDoubleZero) {
              this.setState(({ expression }) => ({
                expression: expression + value,
                isFinished: false,
              }))
            }
          }
        }
      }
    }

    // immediateResult
    if (
      curValueIsOperator &&
      !lastSignIsCloseBracket &&
      !lastSignIsOpenBracket &&
      !lastSignIsOperator
    ) {
      this.handleImmediateResult(currentOperator)
    }

    if (value === SecondaryOperators.EQUAL) {
      this.handleCalculation()
      this.calculator.executeCommand(new ClearCommand())
      this.setState({ result: '', isFinished: true })
    }
  }

  handleImmediateResult = (operator) => {
    const { lastNumber } = getLastNumberInExpr(
      this.state.expression,
    )
    switch (operator) {
      case MainOperators.MINUS:
        this.calculator.executeCommand(
          new SubtractCommand(lastNumber),
        )
        this.setState({
          result: numberIsFloat(this.calculator.value)
            ? this.calculator.value.toString()
            : this.calculator.value.toFixed(3),
        })
        break

      case MainOperators.PLUS:
        this.calculator.executeCommand(
          new AddCommand(lastNumber),
        )
        this.setState({
          result: numberIsFloat(this.calculator.value)
            ? this.calculator.value.toString()
            : this.calculator.value.toFixed(3),
        })
        break

      case MainOperators.DIV:
        this.calculator.executeCommand(
          new DivideCommand(lastNumber),
        )
        this.setState({
          result: numberIsFloat(this.calculator.value)
            ? this.calculator.value.toString()
            : this.calculator.value.toFixed(3),
        })
        break

      case MainOperators.MUL:
        this.calculator.executeCommand(
          new MultiplyCommand(lastNumber),
        )
        this.setState({
          result: numberIsFloat(this.calculator.value)
            ? this.calculator.value.toString()
            : this.calculator.value.toFixed(3),
        })
        break

      case MainOperators.REM:
        this.calculator.executeCommand(
          new RemainderCommand(lastNumber),
        )
        this.setState({
          result: numberIsFloat(this.calculator.value)
            ? this.calculator.value.toString()
            : this.calculator.value.toFixed(3),
        })
        break

      default:
        this.calculator.executeCommand(
          new AddCommand(lastNumber),
        )
        this.setState({
          result: numberIsFloat(this.calculator.value)
            ? this.calculator.value.toString()
            : this.calculator.value.toFixed(3),
        })
    }
  }

  handleCalculation = () => {
    const res = doCalcExpression(this.state.expression)

    if (res || res === 0) {
      if (String(res).includes('Error')) {
        const errRes = generateErrorMsg(String(res))
        this.setState({
          expression: errRes,
          isError: true,
          isFinished: true,
        })
      } else {
        this.setState({
          expression: String(res),
          isFinished: true,
          result: '',
          currentOperator: '',
        })
      }
    }
  }
  render() {
    const { expression, isError, result } = this.state
    return (
      <>
        <Wrapper>
          <Display
            error={isError}
            value={expression}
            result={result}
          />
          <ControlPanel
            handleClick={this.handleExpressionValue}
          />
        </Wrapper>
      </>
    )
  }
}
