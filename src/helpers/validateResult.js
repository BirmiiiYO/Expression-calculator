import { expressionCalculator } from './index';

export const validateResult = (expr, setExpr, addToHistory) => {
  try {
    addToHistory(expr);
    let result = expressionCalculator(expr);
    setExpr(result);
  } catch (error) {
    setExpr('Input Error');
  }
};
