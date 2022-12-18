import React from 'react'

import {
  CustomLink,
  HeaderContainer,
  Title,
  Links,
} from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>Calculator App</Title>
      <Links>
        <CustomLink to="/cc">Class</CustomLink>
        <CustomLink to="/fc">Func</CustomLink>
        <CustomLink to="/settings">Settings</CustomLink>
      </Links>
    </HeaderContainer>
  )
}
