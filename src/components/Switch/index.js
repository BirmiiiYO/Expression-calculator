import React from 'react';

import { Container, Title } from './styles';

const Switch = ({ toggleTheme, titleTheme }) => {
  return (
    <Container onClick={toggleTheme}>
      <Title>{titleTheme}</Title>
    </Container>
  );
};

export default Switch;
