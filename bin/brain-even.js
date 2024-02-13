#!/usr/bin/env node
import { yourAnswer, runGame, getRandomInt } from '../src/index.js';

const isEven = () => {
  const number = getRandomInt(0, 20);
  console.log(`Question: ${number}`);
  const answer = yourAnswer();

  if (number % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
  } else if (number % 2 !== 0 && answer === 'no') {
    console.log('Correct!');
  } else {
    let correctAnswer = '';
    if (answer === 'yes') {
      correctAnswer = 'no';
    } else {
      correctAnswer = 'yes';
    }
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    return false;
  }
  return true;
};

const message = 'Answer "yes" if the number is even, otherwise answer "no".';
runGame(isEven, message);
