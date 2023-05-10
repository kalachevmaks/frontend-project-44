import readlineSync from 'readline-sync';

function generateExpression() {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const operator = ['+', '-', '*'][Math.floor(Math.random() * 3)];
  return `${num1} ${operator} ${num2}`;
}

 function calculate(expression) {
  const [num1, operator, num2] = expression.split(' ');
  if (operator === '+') {
    return parseInt(num1) + parseInt(num2);
  } if (operator === '-') {
    return parseInt(num1) - parseInt(num2);
  } if (operator === '*') {
    return parseInt(num1) * parseInt(num2);
  }
}

export default function calc() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const expression = generateExpression();
     console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer:');
    const expectedAnswer = calculate(expression);
    if (answer === String(expectedAnswer)) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};