#!/usr/bin/env node
import getRandomInt from '../utils.js';

const isEven = () => {
  const number = getRandomInt(0, 20);
  const question = `Question: ${number}`;
  const result = [];
  result.push(question);
  let correctAnswer = '';
  correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  result.push(correctAnswer);
  return result;
};

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

export { isEven, message };
