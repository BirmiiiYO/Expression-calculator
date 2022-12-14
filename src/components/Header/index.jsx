import React from 'react'

import {
  Button,
  CustomLink,
  Element,
  HeaderContainer,
  Title,
} from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>Calculator App</Title>

      <CustomLink to="/settings">Settings</CustomLink>

      <CustomLink to="cc">Class</CustomLink>

      <CustomLink to="/fc">Func</CustomLink>

      <Button>History</Button>
    </HeaderContainer>
  )
}
