import {
  yourAnswer,
  runGame,
  getRandomInt,
  checkCorrect,
} from '../src/index.js';

const progression = () => {
  const randomArrLength = getRandomInt(5, 11);
  const randomStepProgression = getRandomInt(0, 10);
  let startValue = getRandomInt(0, 100);
  const progressionArr = [];
  const randomHiddenIndex = getRandomInt(0, randomArrLength);
  for (let i = 0; i < randomArrLength; i += 1) {
    progressionArr.push(startValue);
    startValue += randomStepProgression;
  }
  const removed = progressionArr.splice(randomHiddenIndex, 1, '..');
  console.log(`Question: ${progressionArr.join(' ')}`);
  const answer = Number(yourAnswer());
  const correctAnswer = Number(removed);
  return checkCorrect(answer, correctAnswer);
};
const message = 'What number is missing in the progression?';
runGame(progression, message);
