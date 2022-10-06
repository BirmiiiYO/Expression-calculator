import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Switch from '../Switch';
import { Container, Title, CustomLink, Element, Row } from './styles';

const Header = ({ toggleTheme, titleTheme }) => {
  return (
    <Container>
      <Title type="app name">Calculator App</Title>
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
export default Header;
