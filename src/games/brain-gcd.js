#!/usr/bin/env node

import getRandomInt from '../utils.js';

const largestCommonDivisor = () => {
  let num1 = getRandomInt(0, 100);
  let num2 = getRandomInt(0, 100);
  const question = `Question: ${num1} ${num2}`;
  const result = [];
  result.push(question);
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const correctAnswer = num1 + num2;
  result.push(String(correctAnswer));
  return result;
};
const message = 'Find the greatest common divisor of given numbers.';

export { largestCommonDivisor, message };
