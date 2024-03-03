import getRandomInt from '../utils.js';

const createProgression = (firstValue, countElements, step) => {
  const progression = [];
  let startVal = firstValue;
  for (let i = 0; i < countElements; i += 1) {
    progression.push(startVal);
    startVal += step;
  }
  return progression;
};

const changeProgression = () => {
  const randomSeqLen = getRandomInt(5, 11);
  const randomStepProgression = getRandomInt(0, 10);
  const startValue = getRandomInt(0, 100);
  const sequence = createProgression(startValue, randomSeqLen, randomStepProgression);
  const randomHiddenIndex = getRandomInt(0, sequence.length);
  const hiddenElement = sequence.splice(randomHiddenIndex, 1, '..');
  const question = `Question: ${sequence.join(' ')}`;
  const correctAnswer = String(hiddenElement);
  return [question, correctAnswer];
};
const message = 'What number is missing in the progression?';

export { changeProgression, message };
