// import readlineSync from 'readline-sync';
import { greeting, yourAnswer } from '../src/index.js';

/* const min = 0;
const max = 20; */

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const isEven = () => {
  // console.log('brain-even');
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const number = getRandomInt(0, 20); // Тут генерируется число от 0 до 1
    console.log(`Question: ${number}`);
    const answer = yourAnswer();
    // const answer = readlineSync.question('Your answer: ');

    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`,
      );
      return;
    }

    i += 1;
    // (number % 2 === 0 && answer === 'yes') ? 'Correct!' :
  }
  console.log(`Congratulations, ${name}!`);
};

isEven();
