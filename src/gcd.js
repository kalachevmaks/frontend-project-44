import readlineSync from 'readline-sync';

function generateNumbers() {
     
    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2 = Math.floor(Math.random() * 50) + 1;
    return [num1, num2];
  }
  
  function calculateGCD(num1, num2) {
     
    while (num2 !== 0) {
      let temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return num1;
  }
  
  export default function gcd() {
    console.log("Welcome to the Brain Games!");
    let name =  readlineSync.question("May I have your name?");
    console.log(`Hello, ${name}!`);
    console.log("Find the greatest common divisor of given numbers.");
  
    let correctAnswers = 0;
    while (correctAnswers < 3) {
      let [num1, num2] = generateNumbers();
      console.log(`Question: ${num1} ${num2}`);
      let answer =  readlineSync.question("Your answer:");
      let expectedAnswer = calculateGCD(num1, num2);
      if (answer === String(expectedAnswer)) {
        console.log("Correct!");
        correctAnswers++;
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
  
    console.log(`Congratulations, ${name}!`);
  }