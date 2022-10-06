import { Container, Title, Button, Ul } from './styles';
import { CalcContext } from './../../store';
import { useContext, useState } from 'react';
import HistoryItem from '../../components/HistoryItem';
const History = () => {
  const [, , history, setHistory] = useContext(CalcContext);

  return (
    <Container>
      <Title>Operation history:</Title>
      <Ul>
        {history.length === 0
          ? 'history is empty'
          : history.map((item) => <HistoryItem item={item} />)}
        {history.length === 0 ? '' : <Button onClick={() => setHistory([])}>Delete history</Button>}
      </Ul>
    </Container>
  );
};

export default History;
