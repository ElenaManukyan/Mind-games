import getRandomInt from '../utils.js';

const isEven = (num) => !(num % 2);

const evenNumber = () => {
  const num = getRandomInt(0, 20);
  const task = `Question: ${num}`;
  const rightAnswer = isEven(num) ? 'yes' : 'no';
  return [task, rightAnswer];
};

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

export { evenNumber, message };
