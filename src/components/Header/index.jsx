import React from 'react'

import {
  CustomLink,
  HeaderContainer,
  Links,
  Title,
} from './styles'

export const Header = () => (
  <HeaderContainer>
    <Title>Calculator App</Title>
    <Links>
      <CustomLink to="/cc">Class</CustomLink>
      <CustomLink to="/fc">Func</CustomLink>
      <CustomLink to="/settings">Settings</CustomLink>
    </Links>
  </HeaderContainer>
)
