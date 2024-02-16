#!/usr/bin/env node
import { yourAnswer, checkCorrect } from './index.js';
import getRandomInt from './utils.js';

const isPrimeNumber = () => {
  const number = getRandomInt(2, 100);
  console.log(`Question: ${number}`);
  const answer = yourAnswer();
  let correctAnswer = '';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      correctAnswer = 'no';
      break;
    } else {
      correctAnswer = 'yes';
    }
  }
  return checkCorrect(answer, correctAnswer);
};
const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { isPrimeNumber, message };
