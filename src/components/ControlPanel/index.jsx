import { Container, Button, Row } from './styles';
import { CalcContext } from '../../store';
import { useContext } from 'react';
import expressionCalculator from '../../helpers/math';

const btnValues = [
  ['%', 7, 8, 9, '*'],
  ['-', 4, 5, 6, '/'],
  ['+', 1, 2, 3, '='],
  ['.', '(', '0', ')', 'CE'],
];

const ControlPanel = () => {
  const [expr, setExpr, history, setHistory] = useContext(CalcContext);

  const updateCalc = (value) => {
    switch (value) {
      case '0':
        if (expr === 0 || '') return expr;
        setExpr(expr + value);
      case '=':
        setHistory([...history, expr]);
        setExpr(expressionCalculator(expr));
        break;
      case 'C':
        setExpr('');
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
            <Button key={value} onClick={() => updateCalc(value)}>
              {value}
            </Button>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default ControlPanel;
