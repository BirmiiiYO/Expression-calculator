import { PropTypes } from 'prop-types';

import { Container } from './styles';

export const HistoryItem = ({ item }) => <Container type="historyItem">{item}</Container>;

HistoryItem.propTypes = {
  item: PropTypes.string.isRequired,
};
