#!/usr/bin/env node
import getRandomInt from './utils.js';

const isPrimeNumber = () => {
  const number = getRandomInt(2, 100);
  const question = `Question: ${number}`;
  const result = [];
  result.push(question);
  let correctAnswer = '';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      correctAnswer = 'no';
      break;
    } else {
      correctAnswer = 'yes';
    }
  }
  result.push(correctAnswer);
  return result;
};
const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { isPrimeNumber, message };
