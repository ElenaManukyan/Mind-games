import getRandomInt from '../utils.js';

const isEven = (num) => !(num % 2);

const evenNumber = () => {
  const number = getRandomInt(0, 20);
  const question = `Question: ${number}`;
  const correctAnswer = (isEven(number) === true) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

export { evenNumber, message };
