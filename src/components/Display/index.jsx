import { Container } from './styles';
import { CalcContext } from '../../store';
import { useContext } from 'react';
const Display = () => {
  const [calc] = useContext(CalcContext);
  return <Container>{calc || '0'}</Container>;
};

export default Display;
