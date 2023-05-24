#!/usr/bin/env node
import readlineSync from 'readline-sync';

function generateNumbers() {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  return [num1, num2];
}

function calculateGCD(num1, num2) {
  while (num2 !== 0) {
    const temp = num2;
    // eslint-disable-next-line no-param-reassign
    num2 = num1 % num2;
    // eslint-disable-next-line no-param-reassign
    num1 = temp;
  }
  return num1;
}

export default function gcd() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const [num1, num2] = generateNumbers();
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer:');
    const expectedAnswer = calculateGCD(num1, num2);
    if (answer === String(expectedAnswer)) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
