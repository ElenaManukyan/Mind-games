#!/usr/bin/env node
// brain-calc

import {
  yourAnswer,
  runGame,
  getRandomInt,
  checkCorrect,
} from '../src/index.js';

const calculator = () => {
  const operators = ['+', '-', '*'];
  const num1 = getRandomInt(0, 10);
  const num2 = getRandomInt(0, 10);
  // prettier-ignore
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  console.log(`Question: ${num1} ${randomOperator} ${num2}`);
  const answer = Number(yourAnswer());
  let correctAnswer = 0;
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
  return checkCorrect(answer, correctAnswer);
};
const message = 'What is the result of the expression?';
runGame(calculator, message);
