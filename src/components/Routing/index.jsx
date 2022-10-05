import { Route, Routes } from 'react-router-dom';
import History from '../../pages/History';
import Main from '../../pages/Main';

const Routing = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </main>
  );
};

export default Routing;
