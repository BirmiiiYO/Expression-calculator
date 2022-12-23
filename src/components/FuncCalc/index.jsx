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
} from '../../utilities/mathOperations'

import {
  Calculator,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  ClearCommand,
} from '../../utilities/calculator'
import { HistoryContext } from '../../App'

const calculator = new Calculator()

export const FunctionalCalculator = () => {
  const { history, setHistory } =
    React.useContext(HistoryContext)
  const [expression, setExpression] = React.useState('0')
  const [currentOperator, setCurrentOperator] =
    React.useState('')
  const [result, setResult] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const [isFinish, setIsFinish] = React.useState(false)

  const handleExpressionValue = (value) => {
    console.log(history)
    switch (value) {
      case SecondaryOperators.CLEAR_ALL:
        handleClearDisplay()
        break

      case SecondaryOperators.COMMA:
        handleComma(value)
        break

      case SecondaryOperators.DELETE_LAST:
        handleBackOneSign()
        break

      case SecondaryOperators.OPPOSITE:
        handleOppositeSign()
        break

      case SecondaryOperators.OPEN_BRACKET:
        handleOpenBracket(value)
        break

      case SecondaryOperators.CLOSE_BRACKET:
        handleCloseBracket(value)
        break

      default:
        handleNumber(value)
    }
  }

  const handleClearDisplay = () => {
    setExpression('0')
    setIsError(false)
    setIsFinish(false)
    setResult('')
    setCurrentOperator('')
  }

  const handleComma = (value) => {
    const { isCommaAlreadyExist } =
      checkCommaIsUnique(expression)
    if (!isError) {
      if (!isCommaAlreadyExist) {
        setExpression(expression + value)
      }
    }
  }

  const handleBackOneSign = () => {
    if (!isError) {
      if (expression.length > 1) {
        const cutValue = expression.slice(0, -1)
        setExpression(cutValue)
      } else {
        setExpression('0')
      }
    }
  }

  const handleOppositeSign = () => {
    if (!isError && expression !== '0') {
      setExpression((Number(expression) * -1).toString())
    }
  }

  const handleOpenBracket = (value) => {
    const { lastSignIsOperator } =
      checkLastSignIsOperator(expression)

    if (!isError) {
      if (value === '(' && lastSignIsOperator) {
        calculator.executeCommand(new ClearCommand())
        setResult('0')
        setCurrentOperator('')
      }

      if (
        (expression.length === 1 && expression === '0') ||
        isFinish
      ) {
        setIsFinish(false)
        setExpression(value)
      } else {
        const lastSign = expression.charAt(
          expression.length - 1,
        )
        const { lastSignIsOperator } =
          checkLastSignIsOperator(expression)
        if (lastSignIsOperator) {
          setExpression(expression + value)
        } else if (lastSign === '(') {
          setExpression(expression + value)
        }
      }
    }
  }

  const handleCloseBracket = (value) => {
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
      setCurrentOperator('')
      handleImmediateResult(currentOperator)
      setExpression(expression + value)
    }
  }

  const handleNumber = (value) => {
    const operands = '+-/*%'
    const curValueIsOperator = operands.includes(value)
    const { lastSignIsOperator } =
      checkLastSignIsOperator(expression)
    const { lastSignIsOpenBracket } =
      checkLastSignIsOpenBrackets(expression)
    const { lastSignIsCloseBracket } =
      checkLastSignIsCloseBrackets(expression)
    const isDoubleZero = value === '00'
    if (curValueIsOperator) {
      setCurrentOperator(value)
    }

    if (expression === '0') {
      if (!isDoubleZero && !curValueIsOperator) {
        setExpression(value)
        setIsFinish(false)
      }
    } else {
      // sign as first
      if (isError && !curValueIsOperator) {
        setIsError(false)
        setExpression(value)
      } else if (isFinish && !curValueIsOperator) {
        if (!isDoubleZero) {
          setIsFinish(false)
          setExpression(value)
        }
      } else {
        // sign need to be added
        if (
          !lastSignIsOperator &&
          !isError &&
          !lastSignIsOpenBracket
        ) {
          setExpression(expression + value)
          setIsFinish(false)
        } else {
          if (!curValueIsOperator) {
            if (!isDoubleZero) {
              setExpression(expression + value)
              setIsFinish(false)
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
      handleImmediateResult(currentOperator)
    }

    if (value === SecondaryOperators.EQUAL) {
      handleCalculation()
      calculator.executeCommand(new ClearCommand())
      setResult('')
      setIsFinish(true)
    }
  }

  const handleCalculation = () => {
    if (!isError) {
      setHistory([...history, expression])
    }
    const res = doCalcExpression(expression)

    if (res || res === 0) {
      if (String(res).includes('Error')) {
        const errRes = generateErrorMsg(String(res))
        setExpression(errRes)
        setIsError(true)
        setIsFinish(true)
      } else {
        setExpression(String(res))
        setIsFinish(true)
        setResult('')
        setCurrentOperator('')
      }
    }
  }

  const handleImmediateResult = (operator) => {
    const { lastNumber } = getLastNumberInExpr(expression)
    switch (operator) {
      case MainOperators.MINUS:
        calculator.executeCommand(
          new SubtractCommand(lastNumber),
        )
        setResult(calculator.value.toString())
        break

      case MainOperators.PLUS:
        calculator.executeCommand(
          new AddCommand(lastNumber),
        )
        setResult(calculator.value.toString())
        break

      case MainOperators.DIV:
        calculator.executeCommand(
          new DivideCommand(lastNumber),
        )
        setResult(calculator.value.toFixed(3))
        break

      case MainOperators.MUL:
        calculator.executeCommand(
          new MultiplyCommand(lastNumber),
        )
        setResult(calculator.value.toString())
        break

      case MainOperators.REM:
        calculator.executeCommand(
          new RemainderCommand(lastNumber),
        )
        setResult(calculator.value.toString())
        break

      default:
        calculator.executeCommand(
          new AddCommand(lastNumber),
        )
        setResult(calculator.value.toString())
    }
  }
  const localStorageSetHistory = (historyCalc) => {
    console.log(historyCalc)
    const stringifiedValue = JSON.stringify(historyCalc)
    localStorage.setItem('history', stringifiedValue)
  }

  React.useEffect(() => {
    localStorageSetHistory(history)
  }, [history])

  return (
    <Wrapper>
      <Display
        error={isError}
        value={expression}
        result={result}
      />
      <ControlPanel handleClick={handleExpressionValue} />
    </Wrapper>
  )
}
