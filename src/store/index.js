import React, { useState } from 'react';

export const CalcContext = React.createContext('');

const Context = ({ subPages }) => {
  const [expr, setExpr] = useState('');
  const [history, SetHistory] = useState([]);

  return (
    <CalcContext.Provider value={[expr, setExpr, history, SetHistory]}>
      {subPages}
    </CalcContext.Provider>
  );
};

export default Context;
