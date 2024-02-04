// brain-gcd
import { yourAnswer, runGame } from '../src/index.js';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const largestCommonDivisor = () => {
  let num1 = getRandomInt(0, 100);
  let num2 = getRandomInt(0, 100);
  console.log('Find the greatest common divisor of given numbers.');
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
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    return false;
  }
  return true;
};

runGame(largestCommonDivisor);
