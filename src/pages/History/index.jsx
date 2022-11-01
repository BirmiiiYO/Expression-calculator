import { useContext } from 'react';

import { CalcContext } from './../../store';
import { HistoryItem } from '../../components';

import { Container, Title, Button, Ul } from './styles';

export const History = () => {
  const [, , history, setHistory] = useContext(CalcContext);

  return (
    <Container>
      <Title>Operation history:</Title>
      <Ul type="list">
        {history.length === 0
          ? 'history is empty'
          : history.map((item, i) => <HistoryItem key={`${item}_${i}`} item={item} />)}
      </Ul>
      {history.length === 0 ? (
        ''
      ) : (
        <Button onClick={() => setHistory([])} type="delete">
          Delete history
        </Button>
      )}
    </Container>
  );
};
