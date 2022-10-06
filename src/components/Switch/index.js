import React from 'react';
import { PropTypes } from 'prop-types';
import { Container, Title } from './styles';

const Switch = ({ toggleTheme, titleTheme }) => {
  return (
    <Container onClick={toggleTheme}>
      <Title type={titleTheme}>{titleTheme}</Title>
    </Container>
  );
};

Switch.propTypes = {
  toggleTheme: PropTypes.func,
  titleTheme: PropTypes.string.isRequired,
};

export default Switch;
