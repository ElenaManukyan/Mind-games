import getRandomInt from '../utils.js';

const createProgression = (firstValue, countElements, step) => {
  const progressionArr = [];
  let startVal = firstValue;
  for (let i = 0; i < countElements; i += 1) {
    progressionArr.push(startVal);
    startVal += step;
  }
  return progressionArr;
};

const progression = () => {
  const randomArrLength = getRandomInt(5, 11);
  const randomStepProgression = getRandomInt(0, 10);
  const startValue = getRandomInt(0, 100);
  const progressionArr = createProgression(startValue, randomArrLength, randomStepProgression);
  const randomHiddenIndex = getRandomInt(0, progressionArr.length);
  const hiddenElement = progressionArr.splice(randomHiddenIndex, 1, '..');
  const question = `Question: ${progressionArr.join(' ')}`;
  const correctAnswer = String(hiddenElement);
  return [question, correctAnswer];
};
const message = 'What number is missing in the progression?';

export { progression, message };
