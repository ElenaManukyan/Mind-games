import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const printMessage = (message) => {
  console.log(message);
};

const yourAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const runGame = (func, message) => {
  const name = greeting();
  printMessage(message);
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
    console.log(`Congratulations, ${name}!`);
  }
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function checkCorrect(answer, correctAnswer) {
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
    );
    return false;
  }
  return true;
}

export {
  greeting,
  yourAnswer,
  runGame,
  printMessage,
  getRandomInt,
  checkCorrect,
};
