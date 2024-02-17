#!/usr/bin/env node
import getRandomInt from './utils.js';

const isEven = () => {
  const number = getRandomInt(0, 20);
  const question = `Question: ${number}`;
  const result = [];
  result.push(question);
  let correctAnswer = '';

  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  result.push(correctAnswer);
  return result;
};

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

export { isEven, message };
