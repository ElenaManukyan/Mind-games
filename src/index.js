import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const yourAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const runGame = (func) => {
  const name = greeting();
  let i = 0;
  while (i < 3) {
    const res = func();
    if (res === false) {
      console.log(`Let's try again, ${name}!`);
      break;
    }
    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

export { greeting, yourAnswer, runGame };
