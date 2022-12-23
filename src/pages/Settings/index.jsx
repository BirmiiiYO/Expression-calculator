import React from 'react'

import {
  ClearButton,
  Container,
  MySelect,
  Title,
} from './styles'
// eslint-disable-next-line import/no-cycle
import { HistoryContext, ThemeContext } from '../../App'
import { switchTheme } from '../../utilities/changeTheme'

export default function Settings() {
  const { setTheme } = React.useContext(ThemeContext)
  const { setHistory } = React.useContext(HistoryContext)
  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem('history')
  }
  return (
    <Container>
      <Title>Settings:</Title>
      <p>Choose theme:</p>
      <MySelect
        onChange={(e) =>
          setTheme(switchTheme(e.target.value))
        }
        defaultValue={localStorage.getItem('theme')}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="color">Color</option>
      </MySelect>
      <ClearButton onClick={clearHistory}>
        Clear history
      </ClearButton>
    </Container>
  )
}
