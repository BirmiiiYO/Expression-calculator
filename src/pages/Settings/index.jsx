import React from 'react'
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../App'
import { switchTheme } from '../../utilities/changeTheme'

import {
  ClearButton,
  Container,
  MySelect,
  Title,
} from './styles'

export default function Settings() {
  const { setTheme } = React.useContext(ThemeContext)

  const clearHistory = () => {
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
