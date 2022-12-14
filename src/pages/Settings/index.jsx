import React from 'react'

import {
  Container,
  Title,
  MySelect,
  OptionSelect,
} from './styles'

export const Settings = () => {
  return (
    <Container>
      <Title>Settings:</Title>
      <MySelect
        name="theme"
        //defaultValue={this.props.theme}
        //     onChange={e => this.changeSelect(e.target.value)}
      >
        <OptionSelect value="light">Light</OptionSelect>
        <OptionSelect value="dark">Dark</OptionSelect>
        <OptionSelect value="color">Color</OptionSelect>
      </MySelect>
      <button>Clear history</button>
    </Container>
  )
}
