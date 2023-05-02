import readlineSync from 'readline-sync';

export default function evenc() {
  console.log('node bin/brain-games.js');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  let i = 0;
  while (i < 3) {
    const random = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${random}`)
    const name = readlineSync.question('Your answer: ');
    if (random % 2 === 0 && name === 'yes') {i += 1}
    else if (random % 2 !== 0 && name === "no") {i += 1}
    else {return}
  }
  console.log(`Congratulations, ${name}!`)
}