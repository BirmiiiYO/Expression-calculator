import { useContext } from 'react';

import { CalcContext } from '../../store';

import { Container } from './styles';

export const Display = () => {
  const [expr] = useContext(CalcContext);

  return <Container type="display">{expr || '0'}</Container>;
};
