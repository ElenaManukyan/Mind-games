// brain-calc

import { yourAnswer, runGame } from '../src/index.js';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// const name = greeting();

const calculator = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandomInt(0, 10);
  const num2 = getRandomInt(0, 10);
  // prettier-ignore
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];

  if (randomOperator === '+') {
    console.log(`Question: ${num1} ${randomOperator} ${num2}`);
    const answer = Number(yourAnswer());
    const correct = num1 + num2;
    if (answer === correct) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`,
      );
      return false;
    }
  }

  if (randomOperator === '-') {
    console.log(`Question: ${num1} ${randomOperator} ${num2}`);
    const answer = Number(yourAnswer());
    const correct = num1 - num2;
    if (answer === correct) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`,
      );
      return false;
    }
  }

  if (randomOperator === '*') {
    console.log(`Question: ${num1} ${randomOperator} ${num2}`);
    const answer = Number(yourAnswer());
    const correct = num1 * num2;
    if (answer === correct) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`,
      );
      return false;
    }
  }
  return true;
};

runGame(calculator);
