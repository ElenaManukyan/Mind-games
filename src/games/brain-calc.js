import getRandomInt from '../utils.js';

const calculator = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandomInt(0, 10);
  const num2 = getRandomInt(0, 10);
  const randomOperator = operators[getRandomInt(0, operators.length)];
  const question = `Question: ${num1} ${randomOperator} ${num2}`;
  let correctAnswer = 0;
  const result = [];
  result.push(question);
  switch (randomOperator) {
    case '+': {
      correctAnswer = num1 + num2;
      break;
    }
    case '-': {
      correctAnswer = num1 - num2;
      break;
    }
    case '*': {
      correctAnswer = num1 * num2;
      break;
    }
    default:
  }
  return [question, String(correctAnswer)];
};
const message = 'What is the result of the expression?';

export { calculator, message };
