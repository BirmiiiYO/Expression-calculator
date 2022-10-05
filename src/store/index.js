import React, { useState } from 'react';
export const CalcContext = React.createContext('');
const Context = ({ subPages }) => {
  const [calculator, setCalculator] = useState('');
  const [history, SetHistory] = useState([]);

  return (
    <CalcContext.Provider value={[calculator, setCalculator, history, SetHistory]}>
      {subPages}
    </CalcContext.Provider>
  );
};
export default Context;
