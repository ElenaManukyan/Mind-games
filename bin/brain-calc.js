// brain-calc

import { yourAnswer, runGame, getRandomInt } from '../src/index.js';

const calculator = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandomInt(0, 10);
  const num2 = getRandomInt(0, 10);
  // prettier-ignore
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];

  console.log(`Question: ${num1} ${randomOperator} ${num2}`);
  const answer = Number(yourAnswer());
  switch (randomOperator) {
    case '+': {
      const correct = num1 + num2;
      if (answer === correct) {
        console.log('Correct!');
      } else {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`,
        );
        return false;
      }
      break;
    }
    case '-': {
      const correct = num1 - num2;
      if (answer === correct) {
        console.log('Correct!');
      } else {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`,
        );
        return false;
      }
      break;
    }
    case '*': {
      const correct = num1 * num2;
      if (answer === correct) {
        console.log('Correct!');
      } else {
        console.log(
          `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`,
        );
        return false;
      }
      break;
    }
    default:
  }
  return true;
};
const message = 'What is the result of the expression?';
runGame(calculator, message);
