const inquirer = require ('inquirer');
const word = require ('./constructors/word');

let letterGuess = '';

let currentWord;

function start () {
  console.clear;
  console.log ('');
  console.log ('');
  console.log ('Welcome to Body Parts Hangman!');
  console.log ('');
  console.log ('');
  inquirer
    .prompt ([
      {
        type: 'list',
        name: 'newgameinput',
        message: 'Pick one:',
        choices: ['New Game', 'Exit'],
      },
    ])
    .then (function (response) {
      if (response.newgameinput === 'New Game') {
        currentWord = wordArray[Math.floor (Math.random () * 5)];
        newGame ();
      } else {
        process.exit ();
      }
    });
}

function newGame () {
  console.log (currentWord);

  console.log ('');
  console.log ('');
  console.log ('Body Parts Hangman');
  console.log ('');
  console.log (word (currentWord));
  console.log ('');
  inquirer
    .prompt ([
      {
        type: 'input',
        name: 'letterguessinput',
        message: 'Pick a letter: ',
      },
    ])
    .then (function (response) {
      letterGuess = response.letterguessinput;
      newGame ();
    });
}

const wordArray = [
  'Arm',
  'Quadracep',
  'Head',
  'Tricep',
  'Spinal Cord',
  'Tongue',
];

start ();

module.exports = letterGuess;
