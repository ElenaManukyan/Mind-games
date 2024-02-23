#!/usr/bin/env node
import getRandomInt from '../utils.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const evenNumber = () => {
  const number = getRandomInt(0, 20);
  const question = `Question: ${number}`;
  const result = [];
  result.push(question);
  const correctAnswer = isEven(number);
  result.push(correctAnswer);
  return result;
};

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

export { evenNumber, message };
