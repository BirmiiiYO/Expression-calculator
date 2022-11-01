import { expressionCalculator } from './index';

export const validateResult = (expr, setExpr) => {
  try {
    let result = expressionCalculator(expr);
    setExpr(+result.toFixed(3));
  } catch (error) {
    setExpr('Smth went wrong');
  }
};
