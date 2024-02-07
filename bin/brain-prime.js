import { yourAnswer, runGame, getRandomInt } from '../src/index.js';

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
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
    );
    return false;
  }
  return true;
};
const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runGame(isPrimeNumber, message);
