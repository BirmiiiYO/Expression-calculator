import { Container, Button, Row } from './styles';
import { CalcContext } from '../../store';
import { useContext } from 'react';

const ControlPanel = () => {
  const [calculator, setCalсulator, history, setHistory] = useContext(CalcContext);
  console.log(history);
  const cal = (data) => {
    try {
      return new Function('return (' + data + ')')();
    } catch (err) {
      return '';
    }
  };
  const updateCalc = (value) => {
    switch (value) {
      case '=':
        setHistory([...history, calculator]);
        setCalсulator(cal(calculator));
        break;
      case 'C':
        setCalсulator('');
        break;
      case 'CE':
        setCalсulator('');
        break;
      default:
        setCalсulator(calculator + value);
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
