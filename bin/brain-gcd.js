// brain-gcd
import { yourAnswer, runGame, getRandomInt } from '../src/index.js';

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
const message = 'Find the greatest common divisor of given numbers.';
runGame(largestCommonDivisor, message);
