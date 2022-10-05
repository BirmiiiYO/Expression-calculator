import { Container, Title, Button } from './styles';
import { CalcContext } from './../../store';
import { useContext, useState } from 'react';
import HistoryItem from '../../components/HistoryItem';
const History = () => {
  const [, , history, setHistory] = useContext(CalcContext);
  console.log(history.length);
  return (
    <Container>
      <Title>Operation history:</Title>
      {history.length === 0
        ? 'history is empty'
        : history.map((item) => <HistoryItem item={item} />)}
      {history.length === 0 ? '' : <Button onClick={() => setHistory([])}>Delete history</Button>}
    </Container>
  );
};

export default History;
