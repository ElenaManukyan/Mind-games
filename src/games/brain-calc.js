import getRandomInt from '../utils.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': {
      return num1 + num2;
    }
    case '-': {
      return num1 - num2;
    }
    case '*': {
      return num1 * num2;
    }
    default:
      throw new Error(`Operator ${operator} doesn't exist`);
  }
};

const calculator = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandomInt(0, 10);
  const num2 = getRandomInt(0, 10);
  const randomOperator = operators[getRandomInt(0, operators.length)];
  const question = `Question: ${num1} ${randomOperator} ${num2}`;
  const result = [];
  result.push(question);
  return [question, String(calculate(num1, num2, randomOperator))];
};
const message = 'What is the result of the expression?';

export { calculator, message };
