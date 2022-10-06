import { Container } from './styles';
import { PropTypes } from 'prop-types';

const HistoryItem = ({ item }) => {
  return <Container type="historyItem">{item}</Container>;
};

HistoryItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default HistoryItem;
