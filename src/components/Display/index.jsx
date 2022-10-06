import { Container } from './styles';
import { CalcContext } from '../../store';
import { useContext } from 'react';
const Display = () => {
  const [expr] = useContext(CalcContext);
  console.log(expr);
  return <Container type="display">{expr || '0'}</Container>;
};

export default Display;
