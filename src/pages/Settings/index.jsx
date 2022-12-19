import React from 'react'
import { ThemeContext } from '../../ThemeContext'
import { switchTheme } from '../../utilities/changeTheme'

import {
  Container,
  Title,
  MySelect,
  ClearButton,
} from './styles'

export const Settings = () => {
  const { setTheme } = React.useContext(ThemeContext)
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
      <ClearButton>Clear history</ClearButton>
    </Container>
  )
}
