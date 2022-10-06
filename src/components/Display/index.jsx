import { Container } from './styles';
import { CalcContext } from '../../store';
import { useContext } from 'react';
const Display = () => {
  const [expr] = useContext(CalcContext);
  return <Container>{expr || '0'}</Container>;
};

export default Display;
