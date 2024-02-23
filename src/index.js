import readlineSync from 'readline-sync';

const runGame = (func, message) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(message);
  for (let i = 0; i < 3; i += 1) {
    const res = func();
    const [question] = res;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === res[1]) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res[1]}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default runGame;
