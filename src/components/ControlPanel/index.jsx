import { useContext } from 'react';

import { expressionCalculator } from '../../helpers';
import { CalcContext } from '../../store';
import { btnValues } from '../../constants';

import { Container, Button, Row } from './styles';

export const ControlPanel = () => {
  const [expr, setExpr, history, setHistory] = useContext(CalcContext);

  const updateCalc = (value) => {
    if (expr === 0 || '') setExpr('');

    switch (value) {
      case '=':
        setHistory([...history, expr]);
        let result = expressionCalculator(expr);
        setExpr(+result.toFixed(3));
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
