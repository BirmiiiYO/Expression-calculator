import { Route, Routes } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { History, Main } from '../../pages';

export function Routing({ history, setHistory, addToHistory }) {
  return (
    <Routes>
      <Route path="/" element={<Main setHistory={setHistory} addToHistory={addToHistory} />} />
      <Route path="/history" element={<History history={history} setHistory={setHistory} />} />
    </Routes>
  );
}

Routing.propTypes = {
  history: PropTypes.array.isRequired,
  setHistory: PropTypes.func.isRequired,
  addToHistory: PropTypes.func.isRequired,
};
