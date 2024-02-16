#!/usr/bin/env node

import { yourAnswer, checkCorrect } from './index.js';
import getRandomInt from './utils.js';

const largestCommonDivisor = () => {
  let num1 = getRandomInt(0, 100);
  let num2 = getRandomInt(0, 100);
  console.log(`Question: ${num1} ${num2}`);
  const answer = Number(yourAnswer());
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const correctAnswer = num1 + num2;
  return checkCorrect(answer, correctAnswer);
};
const message = 'Find the greatest common divisor of given numbers.';

export { largestCommonDivisor, message };
