import React from 'react';
import { PropTypes } from 'prop-types';

import { HistoryItem } from '../components';

import { Container, Title, Button, Ul } from './styles';

export const History = ({ history, setHistory }) => {
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

History.propTypes = {
  history: PropTypes.array.isRequired,
  setHistory: PropTypes.func.isRequired
};
