import { Container, Button, Row } from './styles';
import { CalcContext } from '../../store';
import { useContext } from 'react';
import expressionCalculator from '../../helpers/math';

const ControlPanel = () => {
  const [expr, setExpr, history, setHistory] = useContext(CalcContext);

  const updateCalc = (value) => {
    if (expr === '0') {
      return setExpr('');
    }
    switch (value) {
      case '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9':
        setExpr(expr + value);
        break;
      case '0':
        if (expr === 0 || '') return;
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
  const btnValues = [
    ['%', 7, 8, 9, '*'],
    ['-', 4, 5, 6, '/'],
    ['+', 1, 2, 3, '='],
    ['.', '(', '0', ')', 'CE'],
  ];
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
