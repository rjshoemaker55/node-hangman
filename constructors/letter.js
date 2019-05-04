function Letter (letter) {
  (this.letter = letter), (this.guessed = false), (this.displayFunc = function () {
    if (this.guessed === true) {
      return this.letter;
    } else {
      return '_';
    }
  });
  this.checker = function (letterGuess) {
    if (letterGuess === this.letter) {
      this.guessed = true;
    } else {
      this.guessed = false;
    }
  };
}

module.exports = Letter;
