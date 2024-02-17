import readlineSync from 'readline-sync';

const runGame = (func, message) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(message);
  let i = 0;
  while (i < 3) {
    const res = func();
    const question = res[0];
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === res[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res[1]}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runGame;
