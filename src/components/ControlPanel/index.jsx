import { Container, Button, Row } from './styles';
import { CalcContext } from '../../store';
import { useContext } from 'react';
import expressionCalculator from '../../helpers/math';

const btnValues = [
  ['.', 7, 8, 9, '*'],
  ['-', 4, 5, 6, '/'],
  ['+', 1, 2, 3, '='],
  ['C', '(', 0, ')', 'CE'],
];

const ControlPanel = () => {
  const [expr, setExpr, history, setHistory] = useContext(CalcContext);

  const updateCalc = (value) => {
    if (expr === 0 || '') return;

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

export default ControlPanel;
