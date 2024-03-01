#!/usr/bin/env node
import getRandomInt from '../utils.js';

const isPrimeNumber = (num) => {
  const number = num;
  let result = '';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = 'no';
      break;
    } else {
      result = 'yes';
    }
  }
  return result;
};

const primeNumber = () => {
  const number = getRandomInt(2, 100);
  const question = `Question: ${number}`;
  return [question, isPrimeNumber(number)];
};
const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { primeNumber, message };
