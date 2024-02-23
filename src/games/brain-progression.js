#!/usr/bin/env node
import getRandomInt from '../utils.js';

const hiddenNumber = (progression) => {
  const sequence = progression;
  const randomHiddenIndex = getRandomInt(0, sequence.length);
  return sequence.splice(randomHiddenIndex, 1, '..');
};

const progression = () => {
  const randomArrLength = getRandomInt(5, 11);
  const randomStepProgression = getRandomInt(0, 10);
  let startValue = getRandomInt(0, 100);
  const progressionArr = [];
  for (let i = 0; i < randomArrLength; i += 1) {
    progressionArr.push(startValue);
    startValue += randomStepProgression;
  }
  const hiddenElement = hiddenNumber(progressionArr);
  const question = `Question: ${progressionArr.join(' ')}`;
  const result = [];
  result.push(question);
  const correctAnswer = String(hiddenElement);
  result.push(correctAnswer);
  return result;
};
const message = 'What number is missing in the progression?';

export { progression, message };
