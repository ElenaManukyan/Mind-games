import getRandomInt from '../utils.js';

const hiddenNumber = (progression) => {
  const sequence = progression;
  const hiddenIndex = getRandomInt(0, sequence.length);
  return sequence.splice(hiddenIndex, 1, '..');
};

const createProgression = (firstValue, countElements, step) => {
  const progression = [];
  let startVal = firstValue;
  for (let i = 0; i < countElements; i += 1) {
    progression.push(startVal);
    startVal += step;
  }
  return progression;
};

const progression = () => {
  const length = getRandomInt(5, 11);
  const stepProgression = getRandomInt(0, 10);
  const startValue = getRandomInt(0, 100);
  const sequence = createProgression(startValue, length, stepProgression);
  const hiddenElement = hiddenNumber(sequence);
  const question = `Question: ${sequence.join(' ')}`;
  const correctAnswer = String(hiddenElement);
  return [question, correctAnswer];
};
const message = 'What number is missing in the progression?';

export { progression, message };
