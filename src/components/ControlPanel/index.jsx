import { PropTypes } from 'prop-types';

import { btnValues } from '../../constants';
import { Container, Button, Row } from './styles';
import { validateResult } from '../../helpers';

export const ControlPanel = ({ expr, setExpr, setHistory, addToHistory }) => {
  const updateCalc = (value) => {
    if (value === 0 && expr === '') return;

    switch (value) {
      case '=':
        validateResult(expr, setExpr, addToHistory);
        break;
      case 'C':
        setExpr(expr.substring(0, expr.length - 1));
        break;
      case 'CE':
        setExpr('');
        break;
      default:
        setExpr(expr + value);
        break;
    }
  };

  return (
    <Container>
      {btnValues.map((row, i) => (
        <Row key={i}>
          {row.map((value) => (
            <Button key={value} type={value} onClick={() => updateCalc(value)}>
              {value}
            </Button>
          ))}
        </Row>
      ))}
    </Container>
  );
};

ControlPanel.propTypes = {
  expr: PropTypes.string.isRequired,
  setExpr: PropTypes.func.isRequired,
  setHistory: PropTypes.func.isRequired,
  addToHistory: PropTypes.func.isRequired,
};
