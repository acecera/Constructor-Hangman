var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];
    this.wordChosen = false;

    this.getLetters = function () {
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter)
        }
    };

    this.wordGuessed = function () {
        if (this.letters.every(function(ltr) {
            return ltr.show === true;
        })) {
            this.wordChosen = true;
            return true;
        }
    };

    this.letterCheck = function(guessedLetter) {
        var showLetter = 0;
        this.letters.forEach(function(ltr){
            if (ltr.letter === guessedLetter) {
                ltr.show = true;
                showLetter++;
            }
        })
        return showLetter;
    };

    this.showWord = function() {
        var display = 0;
        this.letters.forEach(function(ltr) {
            var currentLetter = ltr.letterAppear();
            display+=currentLetter;
        });
        return display;
    };
}

module.exports = word;