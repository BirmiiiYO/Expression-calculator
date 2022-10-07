import { PropTypes } from 'prop-types';

import { Container, Title, Element, Row, CustomLink } from './styles';

import { Switch } from '../index';

export const Header = ({ toggleTheme, titleTheme }) => {
  return (
    <Container>
      <Title>Calculator App</Title>
      <Row>
        <Element>
          <CustomLink to="/">Home</CustomLink>
        </Element>
        <Element>
          <CustomLink to="/history">History</CustomLink>
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
