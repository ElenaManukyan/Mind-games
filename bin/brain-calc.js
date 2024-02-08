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
  let correct = 0;
  switch (randomOperator) {
    case '+': {
      correct = num1 + num2;
      break;
    }
    case '-': {
      correct = num1 - num2;
      break;
    }
    case '*': {
      correct = num1 * num2;
      break;
    }
    default:
  }
  if (answer === correct) {
    console.log('Correct!');
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`,
    );
    return false;
  }
  return true;
};
const message = 'What is the result of the expression?';
runGame(calculator, message);
