#!/usr/bin/env node
import getRandomInt from './utils.js';

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
  const question = `Question: ${progressionArr.join(' ')}`;
  const result = [];
  result.push(question);
  const correctAnswer = String(removed);
  result.push(correctAnswer);
  return result;
};
const message = 'What number is missing in the progression?';

export { progression, message };
