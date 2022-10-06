import { Route, Routes } from 'react-router-dom';

import { History, Main } from '../../pages';

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/history" element={<History />} />
  </Routes>
);
