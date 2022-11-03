import { expressionCalculator } from './index';

export const validateResult = (expr, setExpr, addToHistory) => {
  try {
    let result = expressionCalculator(expr);
    setExpr(result);
    addToHistory(result);
  } catch (error) {
    setExpr('Input Error');
  }
};
