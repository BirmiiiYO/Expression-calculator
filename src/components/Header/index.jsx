import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { Container, Title, Element, Row } from './styles';

import { Switch } from '../index';

export const Header = ({ toggleTheme, titleTheme }) => {
  return (
    <Container>
      <Title>Calculator App</Title>
      <Row>
        <Element>
          <Link to="/">Home</Link>
        </Element>
        <Element>
          <Link to="/history">History</Link>
        </Element>
      </Row>
      <Switch toggleTheme={toggleTheme} titleTheme={titleTheme} />
    </Container>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func,
  titleTheme: PropTypes.string.isRequired,
};
