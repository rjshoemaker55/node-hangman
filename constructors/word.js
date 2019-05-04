let Letter = require ('./letter.js');

function Word (word, letterGuess) {
  let wordDisplay = '';
  let splitWord = word.split ('');

  console.log(splitWord)

  for (i = 0; i < splitWord.length; i++) {
    let newLetter = new Letter (splitWord[i]);

    console.log(splitWord[i])

    newLetter.checker (letterGuess);

    wordDisplay = wordDisplay + newLetter.displayFunc () + ' ';
  }

  return wordDisplay;
}

module.exports = Word;
