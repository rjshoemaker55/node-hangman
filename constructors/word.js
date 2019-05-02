let letterGuess = require ('../index.js')
let Letter = require ('./letter.js');


function Word (word) {
  let wordDisplay = '';
  let splitWord = word.split ('');

  for (i = 0; i < splitWord.length; i++) {
    let newLetter = new Letter (splitWord[i]);

    newLetter.checker(letterGuess);

    wordDisplay = wordDisplay + newLetter.displayFunc () + ' ';

  }

  return(wordDisplay)
}

module.exports = Word;
