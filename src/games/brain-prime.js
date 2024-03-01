import getRandomInt from '../utils.js';

const isPrimeNumber = (num) => {
  const number = num;
  let result = '';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
};

const primeNumber = () => {
  const number = getRandomInt(2, 100);
  const question = `Question: ${number}`;
  const correctAnswer = (isPrimeNumber(number)) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { primeNumber, message };
