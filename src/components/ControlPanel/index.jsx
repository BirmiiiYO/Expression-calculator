import { useContext } from 'react';

import { CalcContext } from '../../store';
import { btnValues } from '../../constants';
import { Container, Button, Row } from './styles';
import { validateResult } from '../../helpers';

export const ControlPanel = () => {
  const [expr, setExpr, history, setHistory] = useContext(CalcContext);

  const updateCalc = (value) => {
    if (value === 0 && expr === '') return;

    switch (value) {
      case '=':
        setHistory([...history, expr]);
        validateResult(expr, setExpr);
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
